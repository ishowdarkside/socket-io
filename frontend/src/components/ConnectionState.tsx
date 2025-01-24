import { useEffect, useState } from "react";
import { socket } from "../socket";

interface WelcomeMessageType {
  message: string;
}

const ConnectionState = ({ isConnected }: { isConnected: boolean }) => {
  const [connectionSuccessMessage, setConnectionSuccessMessage] = useState<WelcomeMessageType | null>(null);

  useEffect(() => {
    socket.on("welcome", (res) => setConnectionSuccessMessage(res));
  }, []);

  return (
    <div>
      <p>State: {isConnected ? "Connected" : "Disconnected"}</p>
      <p>{isConnected && connectionSuccessMessage ? connectionSuccessMessage.message : "Connect for message from server!"}</p>
    </div>
  );
};

export default ConnectionState;
