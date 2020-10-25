const express = require('express')
const router = express.Router()
const registerController = require('../controllers/register.controller');
// Retrieve all employees
router.get('/', registerController.findAll);
// Create a new employee
router.post('/', registerController.create);
// Retrieve a single employee with id
router.get('/:id', registerController.findById);
// Update a employee with id
router.put('/:id', registerController.update);
// Delete a employee with id
router.delete('/:id', registerController.delete);
module.exports = router