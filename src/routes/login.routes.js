const express = require('express')
const router = express.Router()
const loginController = require('../controllers/login.controller');

// Login a register with username and password
router.post('/', loginController.login);

module.exports = router