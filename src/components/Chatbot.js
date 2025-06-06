import React, { useState, useEffect } from "react";

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [userMessage, setUserMessage] = useState("");
    const [mostrarBoton, setMostrarBoton] = useState(false); // Variable para controlar el botón

    useEffect(() => {
        setMessages([{ sender: "bot", text: "Hola! Soy tu asistente de compras, ¿en qué te puedo ayudar hoy?" }]);
    }, []);

    const sendMessage = async () => {
        if (!userMessage.trim()) return;

        const newMessages = [...messages, { sender: "user", text: userMessage }];
        setMessages(newMessages);
        setUserMessage("");

        try {
            const response = await fetch("http://127.0.0.1:3009/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json", "Accept": "application/json" },
                body: JSON.stringify({ message: userMessage }),
            });

            const data = await response.json();
            setMessages([...newMessages, { sender: "bot", text: data.response }]);

            // Verificar si el backend indica que se debe mostrar el botón
            if (data.mostrarFormulario) {
                setMostrarBoton(true);
            }
        } catch (error) {
            console.error("Error:", error);
            setMessages([...newMessages, { sender: "bot", text: "Lo siento, hubo un error de mi parte" }]);
        }
    };

    return (
        <div className="chat-widget">
            <button className="chat-toggle" onClick={() => document.getElementById("chat-container").classList.toggle("hidden")}>💬</button>
            <div id="chat-container" className="chat-container hidden">
                <div id="chat-header">
                    <h3>Asistente</h3>
                    <button onClick={() => document.getElementById("chat-container").classList.add("hidden")}>×</button>
                </div>
                <div id="chat-messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.sender}-message`}>
                            {msg.text}
                        </div>
                    ))}
                    
                    {/* Mostrar el botón solo si la variable mostrarBoton es true */}
                    {mostrarBoton && (
                        <button onClick={() => window.location.href = "http://localhost:3000/#/tabspills"}>
                            Completar Formulario
                        </button>
                    )}
                </div>
                <div id="chat-input-area">
                    <input
                        type="text"
                        value={userMessage}
                        onChange={(e) => setUserMessage(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        placeholder="Escribe tu pregunta..."
                    />
                    <button onClick={sendMessage}>Enviar</button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;