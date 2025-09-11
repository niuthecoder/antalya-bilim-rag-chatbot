                         Antalya Bilim University RAG Chatbot 🤖🎓

A Retrieval-Augmented Generation (RAG) chatbot for Antalya Bilim University that answers factual questions about the university, its departments, faculty, courses, and events using a structured CSV knowledge base.

## Table of Contents

- [Overview]
- [Features]
- [Installation]  
- [Usage]
- [Project Structure]
- [Configuration]
- [FAQ]
- [Future Improvements]
- [Example Questions]
  
## Overview

This project implements a question-answering system powered by:

- **Sentence-Transformers embeddings** for semantic search  
- **Google FLAN-T5 (or similar LLM)** for natural language responses  
- **RAG approach** to retrieve context from a structured CSV dataset  

## It allows users to ask questions like:  

- "Who is the head of the Computer Engineering department?"  
- "List all faculties and their departments"  
- "What are the key dates for the academic year?"  

The chatbot returns **direct, structured answers** using the CSV knowledge base.


## Features

- Answer factual questions about the **university, faculty, courses, events, internships, and career services**  
- **Structured CSV knowledge base** for easy updates  
- Direct and concise answers with **consistent formatting**  
- **API-based interface** using Flask for integration with front-end apps or scripts  

## Installation


git clone https://github.com/yourusername/ABU-RAG-Chatbot.git
cd ABU-RAG-Chatbot/backend
python -m venv venv      # Windows
venv\Scripts\activate    # Mac/Linux
source venv/bin/activate
pip install -r requirements.txt

## Download models:

Embeddings: multi-qa-mpnet-base-dot-v1 (~418MB)
LLM: google/flan-t5-large

## Usage
python app.py
API available at: http://127.0.0.1:5000

## Example using PowerShell:
$q1 = "Who is the head of Computer Engineering department?"
$body = @{ message = $q1 } | ConvertTo-Json
$response = Invoke-RestMethod -Uri http://127.0.0.1:5000/ask -Method POST -Body $body -ContentType "application/json"
$response.response


## FAQ

Q: Can I add more data to the CSV?
A: Yes! Follow the same entity_type, entity_name, attribute_value format.

Q: Can the chatbot handle unknown questions?
A: Yes, it will respond with "Information not available." for queries outside the dataset.

Q: Can I replace the LLM with another model?
A: Yes, any compatible Hugging Face model can be used.

## Future Improvements
Support multi-lingual questions (English & Turkish)
Expand CSV with research publications, alumni, and scholarships
Integrate vector database (FAISS or Pinecone) for faster retrieval


Example Questions You Can Ask
🏛️ University Information

"When was Antalya Bilim University established?"
"What is the tuition fee in USD?"
"What languages are used for instruction?"
"What is the university's ranking in Turkey?"
"What programs does the university offer?"
"What is the exact address of Antalya Bilim University?"
"What is the total student enrollment?"
"Which accreditation bodies recognize the university?"
"Who is the current chancellor?"

👥 Board & Administration

"List all board of trustees members in format: Name - Position"
"Who are the vice chancellors?"

🎓 Faculty & Academics

"Who is the head of Computer Engineering department?"
"List all department heads"
"How many international faculty members are there?"
"How many professors work at the university?"
"List all faculties with their departments"

📚 Courses & Programs

"What are the course details for CS101?"
"What is the schedule for Data Structures course?"
"What are the prerequisites for Machine Learning?"

🗓️ Academic Calendar

"When is the next orientation week?"
"When are the final exams for Fall and Spring?"
"What are the academic terms?"

🏢 Facilities & Services

"What are the opening hours of the main library?"
"What facilities are available in the AI Research Lab?"
"What equipment is in the Cybersecurity Lab?"
"Where is the Makerspace located?"

📞 Contact Information

"What is the email address of the university?"
"What is the phone number of the university?"
"What are the office hours of Dr. Sevgi Şengül Ayan?"
"How can I contact Prof. Emre Arslan?"

💼 Career & Internships

"What are the internship requirements?"
"Which companies are approved for internships?"
"What career services are offered?"

🎪 Events & Activities

"When is the Tech Summit event?"
"How often are hackathons organized?"











