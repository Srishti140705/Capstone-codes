// Import express
const express = require("express");

// Create express app
const app = express();

// Port number
const PORT = 3000;

// Route 1: /one
app.get("/one", (req, res) => {
  res.send("This is route ONE");
});

// Route 2: /one/a/b
app.get("/one/a/b", (req, res) => {
  res.send("This is route ONE/A/B");
});

// Route 3: /two
app.get("/two", (req, res) => {
  res.send("This is route TWO");
});

// Route 4: /two/a
app.get("/two/a", (req, res) => {
  res.send("This is route TWO/A");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});