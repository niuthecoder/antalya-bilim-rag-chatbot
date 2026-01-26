from flask import Flask, request, jsonify
from flask_cors import CORS
from ai_service import AntalyaBilimRAGChatbot

app = Flask(__name__)
CORS(app, resources={
    r"/*": {
        "origins": ["http://localhost:5173", "http://127.0.0.1:5173"]
    }
})
chatbot = AntalyaBilimRAGChatbot()
chatbot.initialize()

@app.route("/ask", methods=["POST"])
def ask():
    data = request.get_json()
    question = data.get("message", "")
    answer = chatbot.query(question)
    return jsonify({"response": answer})

@app.route("/health", methods=["GET"])
def health_check():
    return jsonify({"status": "ok", "initialized": chatbot.initialized})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)
