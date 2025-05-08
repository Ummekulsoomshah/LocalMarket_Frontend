
import React, { useState } from "react";
import "../index.css";

function Chatbot() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Iframe URL for Chatbase chatbot (replace with your actual Chatbase URL)
  const CHATBASE_IFRAME_URL = process.env.REACT_APP_CHATBASE_IFRAME_URL;
  console.log(CHATBASE_IFRAME_URL);  // This will print the value of the environment variable


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

      {/* If not minimized, show the iframe */}
      {!isMinimized && (
        <div className="h-[400px] w-full">
          <iframe
            src={CHATBASE_IFRAME_URL}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Chatbase Chatbot"
            className="rounded-b-lg"
          />
        </div>
      )}
    </div>
  );
}

export default Chatbot;
