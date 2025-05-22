import React from "react";
import {useParams} from 'react-router-dom'

const Chat = () => {
  
  const {targetUserId} = useParams();

  return (
    <div className="max-w-4xl mx-auto border border-gray-700 rounded-2xl shadow-lg m-6 h-[75vh] flex flex-col bg-gray-900 text-white">
      {/* Header */}
      <div className="p-6 border-b border-gray-700 text-xl font-semibold">
        Chat
      </div>

      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {/* Example message placeholder */}
        {/* Replace with actual messages */}
        <div className="text-center text-gray-400">No messages yet</div>
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-700 flex items-center gap-3 bg-gray-800">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 bg-gray-700 border border-gray-600 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-full transition duration-200">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
