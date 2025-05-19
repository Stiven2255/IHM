import { useState } from "react";
import axios from "axios";
import "../styles/CompAPi.css"

export default function CompAPi() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "mistralai/mistral-7b-instruct", 
        messages: newMessages.map((m) => ({
          role: m.sender === "user" ? "user" : "assistant",
          content: m.text,
        })),
      },
      {
        headers: {
          Authorization: `BBearer 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`,
          "Content-Type": "application/json",
          "X-Title": "ViGo AI",
        },
      }
    );


      const botReply = response.data.choices[0].message.content;
      setMessages([...newMessages, { sender: "bot", text: botReply }]);
    } catch (error) {
      console.error("Error en la API:", error);
      setMessages([...newMessages, { sender: "bot", text: "🚨 Error al obtener respuesta." }]);
    }
    setLoading(false);
  };

  return (
    <div className="chat-container">
      <div className="header d-flex justify-content-center align-items-center mb-4">
        <img
          src="https://marketplace.canva.com/EAFBr8O-o_0/2/0/1600w/canva-presentaci%C3%B3n-videojuegos-retro-geom%C3%A9trico-ne%C3%B3n-azul-y-magenta-wDo_p-zyeI4.jpg"
          alt=""
          className="icon me-2 animate__animated animate__fadeIn"
        />
        <h1 className="title">ViGo AI</h1>
      </div>

      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === "user" ? "user" : "bot"}`}
          >
            <div className="bubble">{msg.text}</div>
          </div>
        ))}
        {loading && (
          <div className="message bot">
            <div className="bubble typing">⏳ ...</div>
          </div>
        )}
      </div>

      <div className="input-area input-group mt-3">
        <input
          type="text"
          className="form-control"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Habla con ViGo..."
          disabled={loading}
        />
        <button
          className="btn btn-info"
          onClick={sendMessage}
          disabled={loading || input.trim() === ""}
        >
          🚀 Enviar
        </button>
      </div>
    </div>
  );
}
