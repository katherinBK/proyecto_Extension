import React, { useState, useEffect } from "react";

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [userMessage, setUserMessage] = useState("");

    useEffect(() => {
        // Initialize the chat with a welcome message
        setMessages([{ sender: "bot", text: "Hello! How can I assist you today?" }]);
    }, []);

    const sendMessage = async () => {
        if (!userMessage.trim()) return;

        const newMessages = [...messages, { sender: "user", text: userMessage }];
        setMessages(newMessages);
        setUserMessage("");

        try {
            const response = await fetch("http://127.0.0.1:7861/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: { text: userMessage, files: [] } })
            });

            const data = await response.json();
            setMessages([...newMessages, { sender: "bot", text: data.response }]);
        } catch (error) {
            console.error("Error:", error);
            setMessages([...newMessages, { sender: "bot", text: "Sorry, there was an error." }]);
        }
    };

    return (
        <div className="chat-widget">
            <button className="chat-toggle" onClick={() => document.getElementById("chat-container").classList.toggle("hidden")}>💬</button>
            <div id="chat-container" className="chat-container hidden">
                <div id="chat-header">
                    <h3>Gradio Assistant</h3>
                    <button onClick={() => document.getElementById("chat-container").classList.add("hidden")}>×</button>
                </div>
                <div id="chat-messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.sender}-message`}>
                            {msg.text}
                        </div>
                    ))}
                </div>
                <div id="chat-input-area">
                    <input
                        type="text"
                        value={userMessage}
                        onChange={(e) => setUserMessage(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        placeholder="Ask a question..."
                    />
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;