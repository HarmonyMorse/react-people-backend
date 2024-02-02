// Install mongoose
const mongoose = require('mongoose');

// Initialize .env variables
const {DATABASE_URI} = process.env

// Establish connection
mongoose.connect(DATABASE_URI)

// Connection events
mongoose.connection
    .on("open", () => console.log("You are connected to mongoose"))
    .on("close", () => console.log("You are disconnected from mongoose"))
    .on("error", (error) => console.log(error));
