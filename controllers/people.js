const express = require('express');

// Use object destructuring to import just the models needed
const { Person } = require('../models');

// Index
const index = async (req, res, next) => {
    try {
        // Get all people
        res.json(await Person.find({}));
    } catch (err) {
        // Send an error
        res.status(400).json(err);
    }
}

// Create
const create = async (req, res, next) => {
    try {
        // Create a new person
        res.json(await Person.create(req.body));
    } catch (err) {
        // Send an error
        res.status(400).json(err);
    }
}

// Show (detail)
const show = async (req, res, next) => {
    try {
        // Send one person with the id
        res.json(await Person.findById(req.params.id));
    } catch (err) {
        // Send an error
        res.status(400).json(err);
    }
}

// Update
const update = async (req, res, next) => {
    try {
        res.json(await Person.findByIdAndUpdate(req.params.id, req.body, {new: true}));
    } catch (err) {
        // Send an error
        res.status(400).json(err);
    }
}

// Destroy
const destroy = async (req, res, next) => {
    try {
        // Delete the person
        res.json(await Person.findByIdAndDelete(req.params.id));
    } catch (err) {
        // Send an error
        res.status(400).json(err);
    }
}

// Export the controller actions
module.exports = {
    index,
    create,
    show,
    update,
    delete: destroy,
}