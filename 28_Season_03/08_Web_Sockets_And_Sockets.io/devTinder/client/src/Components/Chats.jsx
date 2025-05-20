import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";

const Chat = () => {
  
  const{targetUserId} = useParams();
  const[message, setMessage] = useState([{text:"hello world!!"}]);
  const user = useSelector((store)=>store.user)
  const userId = user?._id;

  useEffect(()=>{
      const socket = createSocketConnection();
      socket.emit("joinChat", {userId, targetUserId});
  },[]);

  return (
    <div className="flex flex-col h-[70vh] max-w-xl mx-auto my-10 border shadow rounded-md  text-sm">
      
      {/* Header */}
      <div className="p-2 border-b bg-gray-800 font-semibold rounded-t-md text-base">
        Chat with [User Name]
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-2 space-y-2 bg-gray-800">
        <div className="max-w-xs px-3 py-1.5 bg-blue-500 text-white rounded-lg ml-auto">
          Hello, how are you?
        </div>
        <div className="max-w-xs px-3 py-1.5 bg-gray-200 text-black rounded-lg mr-auto">
          I'm good, thanks!
        </div>
      </div>

      {/* Input Bar */}
      <div className="p-2 border-t flex gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-1.5 border rounded-lg text-sm focus:outline-none focus:ring"
        />
        <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
