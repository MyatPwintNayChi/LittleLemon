import { useState } from "react";

const ChatInput = ({ sendMessage, loading }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    sendMessage(input);
    setInput("");
  };

  return (
    <div className="p-2 border-top d-flex">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        disabled={loading}
      />
      <button
        className="btn btn-warning"
        onClick={handleSend}
        disabled={loading}
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
