import React, { useState, useEffect, useRef } from 'react';
import { FaArrowUp } from "react-icons/fa";
import '../styles/ChatbotPage.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  const [hasSentFirstMessage, setHasSentFirstMessage] = useState(false);
  const [lastMessageCount, setLastMessageCount] = useState(0);
  const API_URL = import.meta.env.VITE_API_URL;

  const suggestions = [
    "What/Where is UBS?",
    "Where is the library?",
    "What time does the university start to work?",
  ];

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    if (!hasSentFirstMessage) {
      setHasSentFirstMessage(true);
    }

    const userMessage = { sender: 'user', text };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    try {
        const response = await fetch(`${API_URL}/ask`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: text }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      const botReply = {
        sender: 'bot',
        text: data.response || "I couldn't find an answer to that.",
      };

      setMessages((prev) => [...prev, botReply]);

    } catch (error) {
      console.error("Error fetching chatbot response:", error);

      const botReply = {
        sender: 'bot',
        text: "Sorry, something went wrong!",
      };

      setMessages((prev) => [...prev, botReply]);
    }
  };

  useEffect(() => {
    if (messages.length > lastMessageCount) {
      const container = messagesEndRef.current?.parentNode;
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
      setLastMessageCount(messages.length);
    }
  }, [messages, lastMessageCount]);

  return (
    <div className="chatbot-outer-container">
      {!hasSentFirstMessage && (
        <div className="hide-chatbot-container">
          <div className="chatbot-header">
            <h1>Hi there! What can I help with?</h1>
          </div>

          <div className="suggestions-container">
            <h2>Here are some suggestions</h2>
            <div className="suggestion-buttons">
              {suggestions.map((question, i) => (
                <button
                  key={i}
                  className="suggestion-btn"
                  onClick={() => sendMessage(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className={`chatbot-container ${hasSentFirstMessage ? "after-message" : ""}`}>
        <div className="chatbot-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="chatbot-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
            placeholder="Ask me anything ..."
          />
          <button onClick={() => sendMessage(input)}>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
