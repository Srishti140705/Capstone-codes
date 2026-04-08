// Import Express
const express = require("express");

// Create Express app
const app = express();

// Middleware to handle JSON data
app.use(express.json());

// Port number
const PORT = 3000;

/*
  1️⃣ Sending & Receiving data using URL Parameters
  Example: /user/Sathwik
*/
app.get("/user/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello ${name}`);
});

/*
  2️⃣ Sending & Receiving data using Query Parameters
  Example: /search?course=NodeJS
*/
app.get("/search", (req, res) => {
  const course = req.query.course;
  res.send(`Course selected: ${course}`);
});

/*
  3️⃣ Sending & Receiving data using Request Body (POST)
  Example: /login
*/
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  res.json({
    message: "Login successful",
    user: username
  });
});

/*
  4️⃣ Sending data as JSON Response
*/
app.get("/data", (req, res) => {
  res.json({
    application: "Express App",
    version: "1.0",
    status: "Running"
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});