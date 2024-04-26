import { Server } from "socket.io";

export default (io: Server) => {
  const namespace = io.of(/^\/organizations-owner-[0-9a-fA-F]{24}$/);

  namespace.on("connection", (socket) => {
    console.log("Client connected to /organization namespace");

    socket.on("disconnect", () => {
      console.log("Client disconnected from /organization namespace");
    });
  });
};
