const socket = require("socket.io");
const crypto = require("crypto");

const getSecretRoomId = (userId, targetUserId)=>{
    return crypto
    .createHash("sha256")
    .update([userId,targetUserId].sort().join("_"))
    .digest("hex");
}

const initializeSocket = (server) => {
  const io = socket(server, {
    cors: {
      origin: "http://localhost:5173",
    },
  });

  io.on("connection", (socket) => {
    // User joins a chat room
    socket.on("joinChat", ({ firstName, userId, targetUserId }) => {
      const roomId = getSecretRoomId(userId,targetUserId);
    //   console.log("Joining Room:", firstName, ":", roomId);
      socket.join(roomId);
    });

    // Handle sending message
    socket.on("sendMessage", ({ firstName, userId, targetUserId, text }) => {
      const roomId = getSecretRoomId(userId,targetUserId);
      io.to(roomId).emit("messageReceived", { firstName, text });
    });

    // Handle disconnect
    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
};

module.exports = { initializeSocket };
