import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8000 });

wss.on("connection", (ws) => {

  console.log("websocket connected!!!");
  
  setInterval(() => {
    ws.send("current price of solana is:" + Math.random());
  }, 500);

  ws.on("message", (e) => {
    console.log(e.toString());
  });

  ws.on("message", (e) => {
    if(e.toString() === "ping"){
      ws.send("pong");
    };
  });

});