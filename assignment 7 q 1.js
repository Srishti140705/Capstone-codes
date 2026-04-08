// Import http module (in-built in Node.js)
const http = require("http");

// Create server
const server = http.createServer((req, res) => {
  // Set response header
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send response
  res.end("Hello World");
});

// Define port number
const PORT = 3000;

// Start server
server.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000");
});