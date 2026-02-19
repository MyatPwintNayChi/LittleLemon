const ChatMessage = ({ message }) => {
  const isUser = message.sender === "user";

  return (
    <div
      className={`d-flex mb-2 ${
        isUser ? "justify-content-end" : "justify-content-start"
      }`}
    >
      <div
        className={`p-2 rounded-3 ${
          isUser ? "bg-warning text-dark" : "bg-light text-dark"
        }`}
        style={{ maxWidth: "75%" }}
      >
        {message.text}
      </div>
    </div>
  );
};

export default ChatMessage;
