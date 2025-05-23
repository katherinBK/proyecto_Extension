import React, { useState } from "react";

function Chatbot() {
    const [messages, setMessages] = useState([]);

    const sendMessage = async (message) => {
        const response = await fetch("http://127.0.0.1:5000/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message }),
        });
        const data = await response.json();
        setMessages([...messages, { user: message, bot: data.response }]);
    };

    return (
        <div style={{ backgroundColor: "#282828", color: "#ffffff", padding: "20px", borderRadius: "10px" }}>
            <h1>🤖 Chatbot de Ventas</h1>
            {messages.map((msg, index) => (
                <p key={index}><strong>You:</strong> {msg.user} <br /><strong>Bot:</strong> {msg.bot}</p>
            ))}
            <input type="text" onKeyDown={(e) => e.key === "Enter" && sendMessage(e.target.value)} />
        </div>
    );
}

export default Chatbot;