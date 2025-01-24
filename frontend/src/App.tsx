import { useEffect, useState } from "react";
import { socket } from "./socket";
import "./App.css";
import ConnectionState from "./components/ConnectionState";
import Events from "./components/Events";
import ConnectionManager from "./components/ConnectionManager";

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [events, setEvents] = useState<Record<string, string>[]>([]);

  const onConnect = () => setIsConnected(true);
  const onDisconnect = () => setIsConnected(false);
  const onEvent = (event: Record<string, string>) => setEvents((previous) => [...previous, event]);

  useEffect(() => {
    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("foo", onEvent);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("foo", onEvent);
    };
  }, []);
  return (
    <>
      <ConnectionState isConnected={isConnected} />
      <Events events={events} />
      <ConnectionManager isConnected={isConnected} />
    </>
  );
}

export default App;
