import pandas as pd
import logging
import torch
import os
import re
from langchain.docstore.document import Document
from langchain.schema import Document
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.llms import HuggingFacePipeline
from langchain.chains import RetrievalQA
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM, pipeline
from langchain.prompts import PromptTemplate
from flask import Flask, request, jsonify

app = Flask(__name__)

class AntalyaBilimRAGChatbot:
    def __init__(self, csv_path="dataset.csv"):
        self.csv_path = csv_path
        self.vector_store = None
        self.retriever = None
        self.llm = None
        self.chain = None
        self.initialized = False

        logging.basicConfig(format="%(asctime)s - %(levelname)s - %(message)s", level=logging.INFO)
        self.logger = logging.getLogger(__name__)

        self.embedding_model = "sentence-transformers/multi-qa-mpnet-base-dot-v1"
        self.llm_model = "google/flan-t5-large"

    def load_data_from_csv(self):
        df = pd.read_csv(self.csv_path)
        df = df.fillna('')  # fill empty cells
        documents = []
        for _, row in df.iterrows():
            content = str(row['attribute_value']).strip()
            if not content:
                continue
            doc = Document(
                page_content=content,
                metadata={
                    'entity_type': row['entity_type'],
                    'entity_name': row['entity_name']
                }
            )
            documents.append(doc)
        return documents

    def initialize(self):
        try:
            device = "cuda" if torch.cuda.is_available() else "cpu"
            self.logger.info(f"Using device: {device}")

            documents = self.load_data_from_csv()
            embeddings = HuggingFaceEmbeddings(model_name=self.embedding_model, model_kwargs={"device": device})
            self.vector_store = FAISS.from_documents(documents, embeddings)
            self.logger.info(f"Number of documents indexed: {len(self.vector_store.docstore._dict)}")
            self.retriever = self.vector_store.as_retriever(search_kwargs={"k": 13})

            tokenizer = AutoTokenizer.from_pretrained(self.llm_model)
            model = AutoModelForSeq2SeqLM.from_pretrained(self.llm_model, torch_dtype=torch.float32)

            pipe = pipeline(
                "text2text-generation",
                model=model,
                tokenizer=tokenizer,
                max_new_tokens=150,
                temperature=0.1,
                top_p=0.9,
                repetition_penalty=1.2,
                device=-1  # CPU
            )

            self.llm = HuggingFacePipeline(pipeline=pipe)

            prompt_template = """[INST] <<SYS>>
You are a factual assistant. Extract information from the context below.
Example: If context has "John Doe - President", output "John Doe - President"
<</SYS>>

Context: {context}

Question: {question}

Answer: [/INST]"""

            PROMPT = PromptTemplate(template=prompt_template, input_variables=["context", "question"])

            self.chain = RetrievalQA.from_chain_type(
                llm=self.llm,
                chain_type="stuff",
                retriever=self.retriever,
                chain_type_kwargs={"prompt": PROMPT},
                return_source_documents=False
            )

            self.initialized = True
            self.logger.info("✅ RAG Chatbot initialized successfully")

        except Exception as e:
            self.logger.error(f"Initialization failed: {str(e)}")
            raise

    def clean_response(self, response):
        if "[/INST]" in response:
            response = response.split("[/INST]")[-1]
        response = re.sub(r'<[^>]+>', '', response)
        response = re.sub(r'\[/?INST\]', '', response)
        response = re.sub(r'<</?SYS>>', '', response)
        response = ' '.join(response.split()).strip()
        if not response:
            return "Information not available"
        return response

    def query(self, question):
        print(f"🚨 DEBUG - QUESTION RECEIVED: {question}")

        if not self.initialized:
            print("🚨 SYSTEM NOT INITIALIZED")
            return "System not initialized. Please call initialize() first."
        
        try:
            print(f"=== PROCESSING QUESTION: {question} ===")
            
            # Determine expected entity type based on keywords
            question_lower = question.lower()
            if any(k in question_lower for k in ["board of trustees", "trustee", "all trustees"]):
                expected_type = "trustee"
            elif any(k in question_lower for k in ["faculty", "department head", "head of department"]):
                expected_type = "faculty_member"
            elif any(k in question_lower for k in ["faculty list", "departments"]):
                expected_type = "university"
            else:
                expected_type = None

            # Retrieve relevant documents
            docs = self.retriever.get_relevant_documents(question)
            
            # DEBUG: See what we get first
            print("RAW DOCS:", [doc.page_content for doc in docs])
            
            # HARD FILTER - Remove unwanted documents (WITH TRUSTEE AND FACULTY_STATS FIX)
            filtered_docs = []
            for doc in docs:
                content = doc.page_content
                
                # DON'T FILTER OUT TRUSTEE OR FACULTY_STATS DOCUMENTS
                if doc.metadata.get("entity_type") == "trustee" or doc.metadata.get("entity_type") == "faculty_stats":
                    filtered_docs.append(doc)
                    continue
                    
                # For other documents, apply normal filtering
                if not any(unwanted in content for unwanted in ["Mah.", "Bulvar", "12500", "Fall:", "Dec", "May", "2024", "Tel:", "Email:", "Address:", "Mon/", "Wed ", "09:00", "13:00"]):
                    filtered_docs.append(doc)
            # DEBUG: See what remains after filtering
            print("FILTERED DOCS:", [doc.page_content for doc in docs])

            # Filter docs by entity type if specified
            if expected_type:
                docs = [doc for doc in docs if doc.metadata.get("entity_type") == expected_type]
                print(f"AFTER ENTITY FILTER ({expected_type}):", [doc.page_content for doc in docs])
            
            # SPECIAL HANDLERS FOR SPECIFIC QUESTION TYPES
            if expected_type == "trustee" and docs:
                trustee_list = [doc.page_content for doc in docs]
                return "\n".join(trustee_list)
                
            elif "international" in question_lower and "faculty" in question_lower:
                print("🚨 INTERNATIONAL HANDLER TRIGGERED!")
                
                # Search the vector store directly for international_ratio
                try:
                    # Search by entity_name directly in the vector store
                    international_docs = self.vector_store.similarity_search("international_ratio", k=5)
                    print("DIRECT SEARCH RESULTS:", [f"{doc.metadata.get('entity_name')}: {doc.page_content}" for doc in international_docs])
                    
                    # Find the exact international_ratio document
                    for doc in international_docs:
                        if str(doc.metadata.get('entity_name')) == 'international_ratio':
                            return f"{doc.page_content}"
                            
                    return "Information not available"
                    
                except Exception as e:
                    print(f"Error in direct search: {e}")
                    return "Information not available"

            elif "chancellor" in question_lower:
                # Return chancellor directly
                chancellor_docs = [doc for doc in docs if "chancellor" in doc.page_content.lower()]
                if chancellor_docs:
                    return chancellor_docs[0].page_content.split(":")[-1].strip()

            elif "accreditation" in question_lower:
                # Return accreditation directly
                accred_docs = [doc for doc in docs if "accreditation" in doc.page_content.lower()]
                if accred_docs:
                    return accred_docs[0].page_content.split(":")[-1].strip()

            elif "student enrollment" in question_lower or "students count" in question_lower:
                # Return student count directly
                student_docs = [doc for doc in docs if "students count" in doc.page_content.lower()]
                if student_docs:
                    return student_docs[0].page_content.split(":")[-1].strip()
            
            if not docs:
                return "Information not available"
            
            # Merge filtered documents into context
            context_text = "\n".join([d.page_content for d in docs])
            print(f"FINAL CONTEXT: {context_text}")
            
            # Pass to LLM
            result = self.chain.invoke({"query": question, "context": context_text})
            answer = self.clean_response(result["result"])
            
            print(f"FINAL ANSWER: {answer}")
            return answer
            
        except Exception as e:
            self.logger.error(f"Query failed: {str(e)}")
            return "Sorry, I encountered an error. Please try again."

# Initialize chatbot
chatbot = AntalyaBilimRAGChatbot()
chatbot.initialize()

# Flask API
@app.route("/ask", methods=["POST"])
def ask():
    data = request.get_json()
    question = data.get("message", "")
    answer = chatbot.query(question)
    return jsonify({"response": answer})

if __name__ == "__main__":
    app.run(debug=True, use_reloader=False)