const app = require("./app");
const { Server } = require("socket.io");

const io = new Server(8001, {
  cors: {
    origin: "http://localhost:5173", // Vite's development server
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.emit("welcome", { message: "Welcome, welcome to steady classes" });
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
