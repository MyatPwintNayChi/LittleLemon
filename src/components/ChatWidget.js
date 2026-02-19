import { useState } from "react";
import ChatWindow from "./ChatWindow";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <ChatWindow closeChat={() => setIsOpen(false)} />}

      <button
        className="btn btn-warning rounded-circle shadow-lg"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          fontSize: "24px",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        💬
      </button>
    </>
  );
};

export default ChatWidget;
