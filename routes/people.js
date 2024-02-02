// Install express
const express = require('express')

// Create a router
const router = express.Router()

// Routes

// Index
// GET /
router.get('/', async (req, res) => {
    res.status(200).json({ message: 'people index route' })
});

// Create
// POST /
router.post('/', async (req, res) => {
    res.status(201).json({ message: 'people create route' })
});

// Export router
module.exports = router