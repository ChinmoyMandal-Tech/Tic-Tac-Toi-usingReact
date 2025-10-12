import { WebSocketServer } from "ws";
import http from "http";

const PORT = 5000;

// Simple HTTP server (so browser can connect)
const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end("Tic Tac Toe WebSocket Server running");
});

// Attach WebSocket server
const wss = new WebSocketServer({ server });
const collectedData = [];
wss.on("connection", (ws) => {
    console.log("New player connected");
    ws.send(JSON.stringify({ type: "welcome", message: "Welcome to Tic Tac Toe!" }));
    

    ws.on("message", (message) => {
        try {
            const data = JSON.parse(message);
            console.log("📦 Received from client:", data);
            collectedData.push(data.InputData);

            // ✅ Broadcast to ALL clients
            wss.clients.forEach((client) => {
                if (client.readyState === ws.OPEN) {
                    client.send(JSON.stringify({ type: "data", data: collectedData }));
                }
            });

        } catch (error) {
            console.error("Error: ", error)
        }
    })
    ws.on("close", () => {
        console.log("🔴 Player disconnected");
    });
})


server.listen(PORT, () =>
    console.log(`✅ WebSocket Tic Tac Toe server running on http://localhost:${PORT}`)
);
