import React, { useState } from "react";
import axios from "axios";
import { chatbot } from "../data/Data";
import stringSimilarity from "string-similarity";
import "../index.css";

function Chatbot() {
  const [userMessage, setUserMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [lastRequestTime, setLastRequestTime] = useState(0);
  const [isRetrying, setIsRetrying] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

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
    if (!retrying && now - lastRequestTime < 5000) {
      console.warn("Too many requests! Please wait.");
      return;
    }
    setLastRequestTime(now);

    const newChatHistory = [...chatHistory, { role: "user", content: userMessage }];
    setChatHistory(newChatHistory);

    const localResponse = findBestMatch(userMessage);
    if (localResponse) {
      setChatHistory([...newChatHistory, { role: "assistant", content: localResponse }]);
      setUserMessage("");
      return;
    }

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
      console.error("Chatbot API error:", error);
      if (error.response?.status === 429 && !isRetrying) {
        console.warn("Too many requests. Retrying in 5 seconds...");
        setIsRetrying(true);
        setTimeout(() => {
          setIsRetrying(false);
          handleSendMessage(true);
        }, 5000);
      } else {
        setChatHistory([...newChatHistory, { role: "assistant", content: "Sorry, I'm overloaded. Try again later." }]);
      }
    }

    setUserMessage("");
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-5 right-5 w-80 md:w-96 z-50 ${isMinimized ? "h-12" : "h-auto"} shadow-2xl rounded-lg border border-gray-300 bg-white`}>
      <div className="flex items-center justify-between p-3 bg-gray-100 rounded-t-lg">
        <div className="font-semibold text-gray-800">Chat Support</div>
        <div className="space-x-2">
          <button onClick={() => setIsMinimized(!isMinimized)} className="text-gray-500 hover:text-gray-800">
            {isMinimized ? "▲" : "▼"}
          </button>
          <button onClick={() => setIsVisible(false)} className="text-gray-500 hover:text-red-600">
            ✖
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          <div className="max-h-[300px] overflow-y-auto px-4 py-2">
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={`my-2 p-3 rounded-xl text-sm max-w-[85%] ${
                  msg.role === "user"
                    ? "bg-gray-600 text-white ml-auto"
                    : "bg-gray-200 text-gray-800 mr-auto"
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-gray-200 bg-white flex gap-2 items-center">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 text-sm border border-gray-300 rounded-md focus:ring focus:ring-gray-200 outline-none"
            />
            <button
              onClick={() => handleSendMessage()}
              className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 text-sm rounded-md"
            >
              Send
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Chatbot;