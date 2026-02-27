import { useState, useEffect } from "react";
import ChatWindow from "./ChatWindow";
import "./chatbot.css";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(true);

  // auto show badge after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBadge(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setOpen(!open);
    setShowBadge(false);
  };

  return (
    <>
      {open && <ChatWindow closeChat={() => setOpen(false)} />}

      <button onClick={handleClick} className="chatbot-button shadow">
        {open ? "✕" : "💬"}

        {showBadge && !open && <span className="chatbot-badge"></span>}
      </button>
    </>
  );
}
