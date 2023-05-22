const http = require("http");
const WebSocketServer = require("websocket").server;

const httpserver = http.createServer();
const websocket = new WebSocketServer({ httpServer: httpserver });

// Code to run on the browser
// let ws = new WebSocket("ws://localhost:8080");
// ws.onmessage = message => console.log(`Received: ${message.data}`);
// ws.send("Hello! I'm client")

httpserver.listen(8080, () =>
  console.log("Server started! Listening on port 8080")
);

let connections = [];

websocket.on("request", (request) => {
  const connection = request.accept(null, request.origin);
  connection.on("message", (message) => {
    connections.forEach((c) =>
      c.send(`User-${connection.socket.remotePort} says: ${message.utf8Data}`)
    );
  });

  connections.push(connection);
  connections.forEach((c) =>
    c.send(`User-${connection.socket.remotePort} just connected.`)
  );
});

