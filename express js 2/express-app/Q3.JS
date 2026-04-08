const express = require("express");
const app = express();

// Middleware to read JSON data
app.use(express.json());

const PORT = 3000;

// GET method
app.get("/hello", (req, res) => {
  res.send("GET: Hello from Express");
});

// POST method
app.post("/hello", (req, res) => {
  res.send("POST: Hello from Express");
});

// PUT method
app.put("/hello", (req, res) => {
  res.send("PUT: Hello from Express");
});

// DELETE method
app.delete("/hello", (req, res) => {
  res.send("DELETE: Hello from Express");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});