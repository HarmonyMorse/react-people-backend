// Import mongoose and Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema

// Create a person schema
const PersonSchema = new Schema({
    name: String,
    image: String,
    title: String,
}, { timestamps: true })

// Create and export the model
module.exports = mongoose.model('Person', PersonSchema)