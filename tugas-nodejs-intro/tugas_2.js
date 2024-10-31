/**
 * Buat server HTTP sederhana dengan Node.js yang merespons "Hello, World!" untuk setiap permintaan.
 */

const http = require("http");

// Server Initialization
const server = http.createServer((req, res) => {
    // Set Header
    res.writeHead(200, { "Content-Type": "text/plain" });

    // Send message "Hello, World!"
    res.end("Hello World!");
});

const port = 5000;

// Run Server
server.listen(port, () => {
    console.log(`Server running at <http://localhost>:${port}/`);
});
