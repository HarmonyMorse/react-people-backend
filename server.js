// Initialize .env variables
require("dotenv").config();

require('./config/db.connection')

// Get port and establish connection
const { PORT } = process.env;

// Import express
const express = require("express");

// Create application object
const app = express();

// Import people router
const peopleRouter = require("./routes/people")

// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
app.use("/people", peopleRouter)


// Create a test route
app.get("/", (req, res) => {
    res.send("hello world");
});

// Listen on port
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
