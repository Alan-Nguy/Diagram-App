import { useAgent } from "agents/react";
import { useAgentChat } from "@cloudflare/ai-chat/react";

function App() {
  const agent = useAgent({ agent: "DiagramAgent" });
  const { messages, sendMessage, status } = useAgentChat({ agent });

  const onSubmitHandler = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = e.currentTarget.elements.namedItem(
      "chat-input",
    ) as HTMLInputElement;

    sendMessage({ text: input.value });
    input.value = "";
  };

  return (
    <>
      <h1>Chat App here</h1>
      <hr />
      <br />
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>
            <strong>{msg.role}:</strong>
            {msg.parts.map((part, i) =>
              part.type === "text" ? <span key={i}>{part.text}</span> : null,
            )}
          </li>
        ))}
      </ul>
      <form onSubmit={onSubmitHandler}>
        <input name="chat-input" placeholder="Type a message..." />
        <button type="submit" disabled={status !== "ready"}>
          Send
        </button>
      </form>
    </>
  );
}

export default App;
