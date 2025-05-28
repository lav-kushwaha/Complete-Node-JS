import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import { BASE_URL } from "../utils/Constant";
import axios from 'axios';

const Chat = () => {
  const { targetUserId } = useParams();

  // State to store chat messages displayed in the UI
  const [messages, setMessages] = useState([]);

  // State to track the value of the input field for sending a new message
  const [newMessage, setNewMessage] = useState("");
  
  // Getting the current logged-in user's details from Redux store
  const user = useSelector((store) => store.user);
  const userId = user?._id;

  // Fetch chat messages between current user and target user from the database
  const fetchChatMessages = async () => {
    const chat = await axios.get(`${BASE_URL}/chat/${targetUserId}`, {
      withCredentials: true,
    });

    // Map messages to display sender's name and message text
    const chatMessages = chat?.data?.messages.map((msg) => {
      const { senderId, text } = msg;
      return {
        firstName: senderId?.firstName,
        lastName: senderId?.lastName,
        text,
      };
    });

    setMessages(chatMessages);
  };

  // On initial render, fetch existing chat messages
  useEffect(() => {
    fetchChatMessages();
  }, []);

  // Setup WebSocket connection when userId and targetUserId are available
  useEffect(() => {
    if (!userId) return;

    const socket = createSocketConnection();

    // Notify server that user has joined the chat
    socket.emit("joinChat", {
      firstName: user.firstName,
      userId,
      targetUserId,
    });

    // Listen for new messages from the server
    socket.on("messageReceived", ({ firstName, lastName, text }) => {
      setMessages((prevMessages) => [...prevMessages, { firstName, lastName, text }]);
    });

    // Clean up socket connection on component unmount
    return () => socket.disconnect();
  }, [userId, targetUserId]);

  // Send a new message to the server via WebSocket
  const sendMessage = () => {
    if (!newMessage.trim()) return; // Prevent sending empty messages

    const socket = createSocketConnection();

    socket.emit("sendMessage", {
      firstName: user.firstName,
      lastName:user.lastName,
      userId,
      targetUserId,
      text: newMessage,
    });

    setNewMessage(""); // Clear input after sending
  };

  return (
    <div className="max-w-4xl mx-auto border border-gray-700 rounded-2xl shadow-lg m-6 h-[75vh] flex flex-col bg-gray-900 text-white">
      
      {/* Header */}
      <div className="p-6 border-b border-gray-700 text-xl font-semibold">
        Chat
      </div>

      {/* Chat Messages Display Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.length === 0 ? (
          <div className="text-center text-gray-400">No messages yet</div>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.firstName === user.firstName ? "justify-end" : "justify-start"
              }`}
            >
              <div className="bg-blue-600 rounded-lg px-4 py-2 max-w-xs">
                <span className="font-bold">{`${msg.firstName} ${msg.lastName}`}:</span> {msg.text}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Message Input and Send Button */}
      <div className="p-4 border-t border-gray-700 flex items-center gap-3 bg-gray-800">
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          type="text"
          placeholder="Type your message..."
          className="flex-1 bg-gray-700 border border-gray-600 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-full transition duration-200"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
