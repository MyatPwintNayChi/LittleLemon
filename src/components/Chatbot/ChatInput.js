import { useState } from "react";

export default function ChatInput({ sendMessage }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    sendMessage(text);
    setText("");
  };

  return (
    <div className="p-2 border-top d-flex main ">
      <input
        className="form-control me-2 fs-5"
        value={text}
        placeholder="Type a message..."
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />

      <button className="btn btn-warning fs-5 " onClick={handleSend}>
        Send
      </button>
    </div>
  );
}
