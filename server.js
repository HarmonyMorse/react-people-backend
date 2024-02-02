// Initialize .env variables
require("dotenv").config();

// Get port and establish connection
const { PORT } = process.env;

// Import express
const express = require("express");

// Create application object
const app = express();

// Create a test route
app.get("/", (req, res) => {
    res.send("hello world");
});

// Listen on port
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
