from flask import Flask, request, jsonify
from ai_service import AntalyaBilimRAGChatbot

app = Flask(__name__)
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
    app.run(host="127.0.0.1", port=5000, debug=False)
