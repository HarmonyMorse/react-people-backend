// Install express
const express = require('express')

// Create a router
const router = express.Router()

// ROUTES

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

// Show
// GET /:id
router.get('/:id', async (req, res) => {
    res.status(200).json({ message: 'people show route' + req.params.id })
});

// Update
// PUT /:id
router.put('/:id', async (req, res) => {
    console.log(req.body)
    res.status(200).json({ message: 'people update route' + req.params.id })
});

// Delete
// DELETE /:id
router.delete('/:id', async (req, res) => {
    res.status(200).json({ message: 'people delete route' + req.params.id })
});

// Export router
module.exports = router