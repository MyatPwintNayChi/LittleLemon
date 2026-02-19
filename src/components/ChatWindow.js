import { useState, useRef, useEffect } from "react";
import axios from "axios";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

const ChatWindow = ({ closeChat }) => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" },
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    const userMessage = { text, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/chat", {
        message: text,
      });

      const botMessage = { text: res.data.reply, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: "Error connecting to server.", sender: "bot" },
      ]);
    }

    setLoading(false);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      className="shadow-lg rounded-4 d-flex flex-column bg-white"
      style={{
        position: "fixed",
        bottom: "90px",
        right: "20px",
        width: "350px",
        height: "500px",
      }}
    >
      <div className="bg-warning p-3 d-flex justify-content-between">
        <strong>Little Lemon Chat</strong>
        <button className="btn-close" onClick={closeChat}></button>
      </div>

      <div className="flex-grow-1 p-3 overflow-auto">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))}
        {loading && <div className="text-muted">Typing...</div>}
        <div ref={messagesEndRef} />
      </div>

      <ChatInput sendMessage={sendMessage} loading={loading} />
    </div>
  );
};

export default ChatWindow;
