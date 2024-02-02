// Install express
const express = require('express')

// Create a router
const router = express.Router()

// Import people controller
const peopleCtrl = require('../controllers/people')

// ROUTES

// Index
// GET /
router.get('/', peopleCtrl.index);

// Create
// POST /
router.post('/', peopleCtrl.create);

// Show
// GET /:id
router.get('/:id', peopleCtrl.show);

// Update
// PUT /:id
router.put('/:id', peopleCtrl.update);

// Delete
// DELETE /:id
router.delete('/:id', peopleCtrl.delete);

// Export router
module.exports = router