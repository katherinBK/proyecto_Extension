import React, { useState } from "react";
import Chatbot from "react-chatbotify";
import chatbotConfig from "/ChatbotConfig";

function ChatInterface() {
    const [messages, setMessages] = useState(chatbotConfig.initialMessages);

    const handleUserMessage = async (message) => {
        setMessages([...messages, { type: "text", text: message, sender: "user" }]);
        
        const response = await fetch("http://127.0.0.1:5000/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message }),
        });
        const data = await response.json();
        
        setMessages([...messages, { type: "text", text: data.response, sender: "bot" }]);
    };

    return (
        <Chatbot
            config={chatbotConfig}
            messages={messages}
            onUserMessage={handleUserMessage}
        />
    );
}

export default ChatInterface;