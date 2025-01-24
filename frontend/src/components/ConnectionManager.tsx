import { socket } from "../socket";

const ConnectionManager = ({ isConnected }: { isConnected: boolean }) => {
  const connect = () => socket.connect();
  const disconnect = () => socket.disconnect();

  const buttonText = isConnected ? "Disconnect" : "Connect";
  const buttonFnc = isConnected ? disconnect : connect;
  return (
    <div>
      <button onClick={buttonFnc}>{buttonText}</button>
    </div>
  );
};

export default ConnectionManager;
