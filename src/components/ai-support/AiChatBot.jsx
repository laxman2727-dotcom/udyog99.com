// src/components/ai-support/AiChatBot.jsx
import { useState } from "react";
import { askUdyog99AI } from "../../logic/api/ai.api.js";
import "./AiChatBot.css";

export default function AiChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "ai", text: "Hi BOSS! 🙏 Nenu Udyog99 AI Support. Emi help kaavali?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    const aiReply = await askUdyog99AI(input);
    setMessages((prev) => [...prev, { from: "ai", text: aiReply }]);
    setLoading(false);
  };

  return (
    <>
      <button className="ai-chat-btn" onClick={() => setOpen(!open)}>
        💬
      </button>

      {open && (
        <div className="ai-chat-window">
          <div className="ai-chat-header">
            <b>Udyog99 AI Support</b>
            <span onClick={() => setOpen(false)}>✕</span>
          </div>

          <div className="ai-chat-body">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.from}`}>{m.text}</div>
            ))}
            {loading && <div className="msg ai">Typing... BOSS</div>}
          </div>

          <div className="ai-chat-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type English / Telugu lo..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}