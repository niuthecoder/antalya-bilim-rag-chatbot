# Antalya Bilim University RAG Chatbot

A **full-stack Retrieval-Augmented Generation (RAG) chatbot** with a **React (Vite) frontend** and **Flask backend** that answers factual questions about Antalya Bilim University, including departments, faculty, courses, and academic information using a structured CSV knowledge base.

---

## Overview

This project implements a question-answering system powered by:

- Sentence-Transformers for semantic search
- Google FLAN-T5 for natural language generation
- RAG (Retrieval-Augmented Generation) to retrieve relevant context from a CSV dataset

Users can ask questions such as:
- *Who is the head of the Computer Engineering department?*
- *List all faculties and their departments*
- *What are the key academic dates?*

The system returns **direct, structured, and factual answers**.

---

## Features

- Full-stack AI application (React + Flask)
- Answers factual university-related questions
- Structured CSV knowledge base (easy to update)
- Semantic search using dense embeddings
- REST API for easy integration
- Simple chat-style frontend UI

---

## Tech Stack

### Frontend
- React (Vite)
- JavaScript (ES6+)
- Fetch API
- Chat-style UI

### Backend
- Python
- Flask (REST API)
- Flask-CORS

### AI / ML
- Sentence-Transformers (`multi-qa-mpnet-base-dot-v1`)
- Google FLAN-T5 (`flan-t5-large`)
- Retrieval-Augmented Generation (RAG)

---

## Project Structure

```
frontend/
├─ src/
│ ├─ components/
│ ├─ App.jsx
│ └─ main.jsx
├─ index.html
├─ package.json
└─ vite.config.js

backend/
├─ app.py              # Flask API
├─ ai_service.py       # RAG chatbot logic
├─ data/
│ └─ abu_dataset.csv   # Knowledge base
├─ requirements.txt
└─ README.md
```

---

## Installation

### Clone the repository
```bash
git clone https://github.com/yourusername/ABU-RAG-Chatbot.git
cd ABU-RAG-Chatbot
```

---

## Backend Setup (Flask)

```bash
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
# source venv/bin/activate  # Mac/Linux

pip install -r requirements.txt
```

### Run backend
```bash
python app.py
```

Backend will run at:
```
http://127.0.0.1:5000
```

Health check:
```
GET /health
```

---

## Frontend Setup (React + Vite)

```bash
cd frontend
npm install
npm run dev
```

Frontend will run at:
```
http://localhost:5173
```

---

## Environment Variables (Frontend)

Create a `.env` file in `frontend/`:

```env
VITE_API_URL=http://127.0.0.1:5000
```

Use in React:
```js
fetch(`${import.meta.env.VITE_API_URL}/ask`, ...)
```

Restart the dev server after adding `.env`.

---

## API Usage

### Ask a question
**POST** `/ask`

```json
{
  "message": "Who is the head of the Computer Engineering department?"
}
```

### Health check
**GET** `/health`

---

## Example PowerShell Test

```powershell
$q1 = "Who is the head of Computer Engineering department?"
$body = @{ message = $q1 } | ConvertTo-Json
$response = Invoke-RestMethod -Uri http://127.0.0.1:5000/ask -Method POST -Body $body -ContentType "application/json"
$response.response
```

---

## Future Improvements

- UI enhancements (chat bubbles, typing indicator)
- Authentication & user sessions
- Database-backed knowledge base
- Model optimization for faster inference
- Cloud deployment (Vercel + Render/Railway)

---

## Demo

_the link: ._

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

