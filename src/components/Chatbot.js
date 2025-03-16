
// import React, { useState } from "react";
// import axios from "axios";
// import { chatbot } from "../data/Data"; // Import local responses
// import stringSimilarity from "string-similarity"; // Import fuzzy matching
// import "../index.css"; // Import CSS

// function Chatbot() {
//     const [userMessage, setUserMessage] = useState("");
//     const [chatHistory, setChatHistory] = useState([]);
//     const [lastRequestTime, setLastRequestTime] = useState(0); // Store last API request time
//     const [isRetrying, setIsRetrying] = useState(false); // Track retry state

//     // Load API key from .env
//     const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

//     // Function to find the best match from local responses
//     const findBestMatch = (input) => {
//         const triggers = chatbot.map((item) => item.trigger.toLowerCase());
//         const matches = stringSimilarity.findBestMatch(input.toLowerCase(), triggers);

//         if (matches.bestMatch.rating > 0.7) {
//             return chatbot[matches.bestMatchIndex].response;
//         }
//         return null;
//     };

//     const handleSendMessage = async (retrying = false) => {
//         if (!userMessage.trim()) return;

//         const now = Date.now();
//         if (!retrying && now - lastRequestTime < 5000) {  // Prevent rapid API requests (5s cooldown)
//             console.warn(" Too many requests! Please wait.");
//             return;
//         }
//         setLastRequestTime(now);

//         // Add user message to chat
//         const newChatHistory = [...chatHistory, { role: "user", content: userMessage }];
//         setChatHistory(newChatHistory);

//         // Check for local response first
//         const localResponse = findBestMatch(userMessage);
//         if (localResponse) {
//             setChatHistory([...newChatHistory, { role: "assistant", content: localResponse }]);
//             setUserMessage("");
//             return;
//         }

//         console.log("🔹 Sending request to OpenAI API...");

//         try {
//             const response = await axios.post(
//                 "https://api.openai.com/v1/chat/completions",
//                 {
//                     model: "gpt-3.5-turbo",
//                     messages: [{ role: "system", content: "You are a helpful chatbot." }, ...newChatHistory],
//                     max_tokens: 200,
//                 },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${API_KEY}`,
//                         "Content-Type": "application/json",
//                     },
//                 }
//             );

//             const botMessage = response.data.choices?.[0]?.message?.content || "I'm not sure.";
//             setChatHistory([...newChatHistory, { role: "assistant", content: botMessage }]);
//         } catch (error) {
//             console.error(" Chatbot API error:", error);

//             if (error.response?.status === 429 && !isRetrying) {
//                 console.warn(" Too many requests. Retrying in 5 seconds...");
//                 setIsRetrying(true);
//                 setTimeout(() => {
//                     setIsRetrying(false);
//                     handleSendMessage(true);
//                 }, 5000);
//             } else {
//                 setChatHistory([...newChatHistory, { role: "assistant", content: "Sorry, I'm overloaded. Try again later." }]);
//             }
//         }

//         setUserMessage(""); // Clear input field
//     };

//     return (
//         <div className="chatbot-container">
//             <div className="chatbot-header">Chatbot</div>

//             <div className="chatbot-messages">
//                 {chatHistory.map((msg, index) => (
//                     <div key={index} className={msg.role === "user" ? "chatbot-message user" : "chatbot-message bot"}>
//                         {msg.content}
//                     </div>
//                 ))}
//             </div>

//             <div className="chatbot-input-area">
//                 <input
//                     type="text"
//                     value={userMessage}
//                     onChange={(e) => setUserMessage(e.target.value)}
//                     placeholder="Ask me a question"
//                     className="chatbot-input"
//                 />
//                 <button onClick={() => handleSendMessage()} className="send-button">
//                     Send
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Chatbot;




import React, { useState } from "react";
import axios from "axios";
import { chatbot } from "../data/Data"; // Import local responses
import stringSimilarity from "string-similarity"; // Import fuzzy matching
import "../index.css"; // Import CSS

function Chatbot() {
    const [userMessage, setUserMessage] = useState("");
    const [chatHistory, setChatHistory] = useState([]);
    const [lastRequestTime, setLastRequestTime] = useState(0); // Store last API request time
    const [isRetrying, setIsRetrying] = useState(false); // Track retry state
    const [isMinimized, setIsMinimized] = useState(false); // Track minimized state
    const [isVisible, setIsVisible] = useState(true); // Track chatbot visibility

    // Load API key from .env
    const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

    // Function to find the best match from local responses
    const findBestMatch = (input) => {
        const triggers = chatbot.map((item) => item.trigger.toLowerCase());
        const matches = stringSimilarity.findBestMatch(input.toLowerCase(), triggers);

        if (matches.bestMatch.rating > 0.7) {
            return chatbot[matches.bestMatchIndex].response;
        }
        return null;
    };

    const handleSendMessage = async (retrying = false) => {
        if (!userMessage.trim()) return;

        const now = Date.now();
        if (!retrying && now - lastRequestTime < 5000) {  // Prevent rapid API requests (5s cooldown)
            console.warn(" Too many requests! Please wait.");
            return;
        }
        setLastRequestTime(now);

        // Add user message to chat
        const newChatHistory = [...chatHistory, { role: "user", content: userMessage }];
        setChatHistory(newChatHistory);

        // Check for local response first
        const localResponse = findBestMatch(userMessage);
        if (localResponse) {
            setChatHistory([...newChatHistory, { role: "assistant", content: localResponse }]);
            setUserMessage("");
            return;
        }

        console.log("🔹 Sending request to OpenAI API...");

        try {
            const response = await axios.post(
                "https://api.openai.com/v1/chat/completions",
                {
                    model: "gpt-3.5-turbo",
                    messages: [{ role: "system", content: "You are a helpful chatbot." }, ...newChatHistory],
                    max_tokens: 200,
                },
                {
                    headers: {
                        Authorization: `Bearer ${API_KEY}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            const botMessage = response.data.choices?.[0]?.message?.content || "I'm not sure.";
            setChatHistory([...newChatHistory, { role: "assistant", content: botMessage }]);
        } catch (error) {
            console.error(" Chatbot API error:", error);

            if (error.response?.status === 429 && !isRetrying) {
                console.warn(" Too many requests. Retrying in 5 seconds...");
                setIsRetrying(true);
                setTimeout(() => {
                    setIsRetrying(false);
                    handleSendMessage(true);
                }, 5000);
            } else {
                setChatHistory([...newChatHistory, { role: "assistant", content: "Sorry, I'm overloaded. Try again later." }]);
            }
        }

        setUserMessage(""); // Clear input field
    };

    if (!isVisible) return null;

    return (
        <div className={`chatbot-container ${isMinimized ? "minimized" : ""}`}>
            <div className="chatbot-controls" style={{ marginLeft: "150px", display: "flex", gap: "8px" }}>
                    <button className="minimize-button" onClick={() => setIsMinimized(!isMinimized)}>
                        {isMinimized ? "▲" : "▼"}
                    </button>
                    <button className="exit-button" onClick={() => setIsVisible(false)}>✖</button>
                </div>
            <div className="chatbot-header">
                <span>Chatbot</span>
                
            </div>

            {!isMinimized && (
                <>
                    <div className="chatbot-messages">
                        {chatHistory.map((msg, index) => (
                            <div key={index} className={msg.role === "user" ? "chatbot-message user" : "chatbot-message bot"}>
                                {msg.content}
                            </div>
                        ))}
                    </div>

                    <div className="chatbot-input-area">
                        <input
                            type="text"
                            value={userMessage}
                            onChange={(e) => setUserMessage(e.target.value)}
                            placeholder="Ask me a question"
                            className="chatbot-input"
                        />
                        <button onClick={() => handleSendMessage()} className="send-button">
                            Send
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Chatbot;







