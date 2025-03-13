import React, { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!socket) return;
    socket.send(message);
  };

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000");
    setSocket(ws);

    ws.onmessage = (e) => {
      alert(e.data);
    }
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
        <button>Send</button>
      </form>
    </>
  )
}

export default App
