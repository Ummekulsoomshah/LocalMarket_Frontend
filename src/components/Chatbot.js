
import React, { useState } from 'react';
import '../index.css'; // Import the CSS file where the styles are defined
import { chatbot } from "../data/Data"; // Import the chatbot data

// Normalization function: lowercase and remove special characters
const normalize = (text) =>
  text.toLowerCase().replace(/[^a-z0-9\s]/gi, "").split(/\s+/);

// Matching function to calculate the similarity score
const calculateMatch = (inputWords, triggerWords) => {
  const inputSet = new Set(inputWords);
  const triggerSet = new Set(triggerWords);
  const intersection = [...inputSet].filter(word => triggerSet.has(word));
  return intersection.length / Math.max(triggerWords.length, 1); // Prevent division by zero
};

// Enhanced function to determine the best reply
const getBestReply = (message) => {
  const normalizedInput = normalize(message); // Normalize the user's input

  let bestMatch = null;
  let highestScore = 0;

  for (const item of chatbot) {
    const normalizedTrigger = normalize(item.trigger); // Normalize the stored trigger
    const matchScore = calculateMatch(normalizedInput, normalizedTrigger);

    if (matchScore > highestScore) {
      bestMatch = item;
      highestScore = matchScore;
    }
  }

  // Set a threshold for relevant responses (e.g., 40%)
  if (highestScore >= 0.4) {
    return bestMatch.response;
  }

  // Default response if no relevant match is found
  return "I'm sorry, I couldn't understand. Could you please provide more details?";
};

function Chatbot() {
  const [userMessage, setUserMessage] = useState('');
  const [chatbotReply, setChatbotReply] = useState('');

  const handleInputChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (!userMessage.trim()) return; // Skip empty input

    // Get the chatbot's best reply
    const botReply = getBestReply(userMessage);

    // Update the chatbot's reply and clear the user input field
    setChatbotReply(botReply);
    setUserMessage('');
  };

  return (
    <div className="chatbot-container">
      {/* Chatbot Header */}
      <div className="chatbot-header">
        Chatbot
      </div>

      {/* Chatbot Messages */}
      <div className="chatbot-messages">
        {chatbotReply && (
          <div className="chatbot-message bot">
            {chatbotReply}
          </div>
        )}
      </div>

      {/* Chatbot Input Area */}
      <div className="chatbot-input-area">
        <input
          type="text"
          value={userMessage}
          onChange={handleInputChange}
          placeholder="Ask me a question"
          className="chatbot-input"
        />
        <button onClick={handleSendMessage} className="send-button">
          Send
        </button>
      </div>
    </div>
  );
}

export default Chatbot;


