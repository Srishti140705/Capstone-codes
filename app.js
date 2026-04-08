const express = require("express");

const app = express();

// Route 1
app.get("/one", (req, res) => {
  res.send("This is route ONE");
});

// Route 2
app.get("/one/a/b", (req, res) => {
  res.send("This is route ONE/A/B");
});

// Route 3
app.get("/two", (req, res) => {
  res.send("This is route TWO");
});

// Route 4
app.get("/two/a", (req, res) => {
  res.send("This is route TWO/A");
});

// Start server
app.listen(3000, () => {
  console.log("Express server running on port 3000");
});
