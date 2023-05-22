# Example implementation of Push Pattern in Node.js
A pretty basic example of push implementation using a websocket server in Node.js.

## Prerequisites
Before using this server, just make sure you have Node.js installed on your machine. If you don't have it, you can download it from the official website:
- Node.js (https://nodejs.org)

## How to Run
1. Clone the repository or download the source code.
2. Open a terminal and navigate to the project directory.
``` bash
cd Push
```
3. Install the dependencies.
``` bash
npm install
```
5. Start the server on one terminal.
``` bash
node index.js
```
6. Open a couple browser tabs and run the following lines on the console:
``` javascript
let ws = new WebSocket("ws://localhost:8080");
ws.onmessage = message => console.log(`Received: ${message.data}`);
```
7. On some tab console, run the following line to say hello:
``` javascript
ws.send("Hello! I'm client");
```