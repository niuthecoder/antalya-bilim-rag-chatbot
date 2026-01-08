# Antalya Bilim University RAG Chatbot

A Retrieval-Augmented Generation (RAG) chatbot for Antalya Bilim University that answers factual questions about the university, its departments, faculty, courses, and events using a structured CSV knowledge base.

---

## Table of Contents

- Overview  
- Features  
- Installation  
- Usage  
- Project Structure  
- Configuration  
- FAQ  
- Future Improvements  

---

## Overview

This project implements a question-answering system powered by:

- Sentence-Transformers embeddings for semantic search  
- Google FLAN-T5 (or a similar LLM) for natural language responses  
- A RAG approach to retrieve context from a structured CSV dataset  

It allows users to ask questions such as:

- "Who is the head of the Computer Engineering department?"  
- "List all faculties and their departments"  
- "What are the key dates for the academic year?"  

The chatbot returns direct, structured answers using information from the CSV knowledge base.

---

## Features

- Answer factual questions about the university, faculty, courses, events, internships, and career services  
- Structured CSV knowledge base for easy updates and maintenance  
- Direct and concise answers with consistent formatting  
- API-based interface using Flask for integration with frontend apps or scripts  

---

## Installation

### Clone the Repository
```bash
git clone https://github.com/yourusername/ABU-RAG-Chatbot.git
cd ABU-RAG-Chatbot/backend
```

---

### Create a Virtual Environment
```bash
python -m venv venv
venv\Scripts\activate      # Windows
source venv/bin/activate    # macOS / Linux
```

---

### Install Dependencies
```bash
pip install -r requirements.txt
```

---

### Download Models

- Embedding Model: `multi-qa-mpnet-base-dot-v1` (~418MB)  
- LLM Model: `google/flan-t5-large`  

---

## Usage

### Run the Application
```bash
cd backend
venv\Scripts\activate
python app.py
```

The API will be available at:
```
http://127.0.0.1:5000
```

---

### Test with PowerShell
```powershell
$q1 = "Who is the head of Computer Engineering department?"
$body = @{ message = $q1 } | ConvertTo-Json
$response = Invoke-RestMethod -Uri http://127.0.0.1:5000/ask -Method POST -Body $body -ContentType "application/json"
$response.response
```

---

### API Endpoints

- `POST /ask` — Send a question  
  ```json
  { "message": "<your question>" }
  ```
- `GET /health` — Check if the chatbot is initialized  

---

## Project Structure

```
backend/
├─ app.py                 # Flask API
├─ ai_service.py          # RAG chatbot logic
├─ data/
│  └─ abu_dataset.csv     # CSV knowledge base
├─ requirements.txt       # Python dependencies
└─ README.md
```

---

## Configuration

- Embedding model: `multi-qa-mpnet-base-dot-v1`  
- LLM model: `google/flan-t5-large`  
- Prompt template: Controlled formatting for structured responses  

---

## FAQ

**Q: Can I add more data to the CSV?**  
A: Yes. Add entries following the same `entity_type`, `entity_name`, `attribute_value` format.

**Q: Can the chatbot handle unknown questions?**  
A: Yes. It returns `"Information not available."` for queries outside the dataset.

**Q: Can I replace the LLM with another model?**  
A: Yes. You can swap `google/flan-t5-large` with any compatible Hugging Face model.

---

## Future Improvements

- Add a web interface for direct user queries  
- Support multilingual questions (English & Turkish)  
- Expand the CSV with research publications, alumni, and scholarships  
- Integrate a vector database (FAISS or Pinecone) for faster retrieval  

---

## Example Questions You Can Ask

### 🏛️ University Information
- When was Antalya Bilim University established?  
- What is the tuition fee in USD?  
- What languages are used for instruction?  
- What is the university's ranking in Turkey?  
- What programs does the university offer?  
- What is the exact address of Antalya Bilim University?  
- What is the total student enrollment?  
- Which accreditation bodies recognize the university?  
- Who is the current chancellor?  

### 👥 Board & Administration
- List all board of trustees members in format: Name - Position  
- Who are the vice chancellors?  

### 🎓 Faculty & Academics
- Who is the head of Computer Engineering department?  
- List all department heads  
- How many international faculty members are there?  
- How many professors work at the university?  
- List all faculties with their departments  

### 📚 Courses & Programs
- What are the course details for CS101?  
- What is the schedule for the Data Structures course?  
- What are the prerequisites for Machine Learning?  

### 🗓️ Academic Calendar
- When is the next orientation week?  
- When are the final exams for Fall and Spring?  
- What are the academic terms?  

### 🏢 Facilities & Services
- What are the opening hours of the main library?  
- What facilities are available in the AI Research Lab?  
- What equipment is in the Cybersecurity Lab?  
- Where is the Makerspace located?  

### 📞 Contact Information
- What is the email address of the university?  
- What is the phone number of the university?  
- What are the office hours of Dr. Sevgi Şengül Ayan?  
- How can I contact Prof. Emre Arslan?  

### 💼 Career & Internships
- What are the internship requirements?  
- Which companies are approved for internships?  
- What career services are offered?  

### 🎪 Events & Activities
- When is the Tech Summit event?  
- How often are hackathons organized?  
