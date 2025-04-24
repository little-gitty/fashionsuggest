import React, { useState } from "react";

const ChatSection = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (!input.trim()) return;
        setMessages([...messages, { user: "You", text: input }]);
        setInput("");
        // Simulate chatbot response
        setTimeout(() => {
            setMessages((prev) => [...prev, { user: "Bot", text: "This is a simulated response." }]);
        }, 1000);
    };

    return (
        <div className="chat-section">
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <p key={index} className={msg.user === "You" ? "user-message" : "bot-message"}>
                        <strong>{msg.user}:</strong> {msg.text}
                    </p>
                ))}
            </div>
            <div className="chat-input">
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                />
                <button type="button" onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default ChatSection;