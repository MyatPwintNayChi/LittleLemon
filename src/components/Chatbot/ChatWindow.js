import { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { getBotReply } from "./ChatbotLogic";

export default function ChatWindow({ closeChat }) {
  const [messages, setMessages] = useState([
    {
      text: "Welcome to Little Lemon 🍋 How can I help you?",
      sender: "bot",
    },
  ]);

  const [typing, setTyping] = useState(false);
  const endRef = useRef();

  const sendMessage = (text) => {
    if (!text.trim()) return;

    const userMsg = { text, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);

    setTyping(true);

    setTimeout(() => {
      const reply = getBotReply(text);

      setMessages((prev) => [...prev, { text: reply, sender: "bot" }]);

      setTyping(false);
    }, 1000); // typing delay
  };

  useEffect(() => {
    endRef.current?.scrollIntoView();
  }, [messages]);

  return (
    <div className="chat-window shadow bg-white rounded d-flex flex-column main">
      <div className="bg-warning p-3 d-flex justify-content-between">
        <strong className="fs-4">Little Lemon Chat</strong>

        <button className="btn-close" onClick={closeChat} />
      </div>

      <div className="flex-grow-1 p-3 overflow-auto fs-5">
        {messages.map((msg, i) => (
          <ChatMessage key={i} message={msg} />
        ))}

        {typing && <div className="text-muted">Typing...</div>}

        <div ref={endRef} />
      </div>

      <ChatInput sendMessage={sendMessage} />
    </div>
  );
}
