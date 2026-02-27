export default function ChatMessage({ message }) {
  const isBot = message.sender === "bot";

  return (
    <div className={`d-flex mb-2 ${isBot ? "" : "justify-content-end"}`}>
      <div
        className={`p-2 rounded ${isBot ? "bg-light" : "bg-warning"}`}
        style={{ maxWidth: "75%" }}
      >
        {message.text}
      </div>
    </div>
  );
}
