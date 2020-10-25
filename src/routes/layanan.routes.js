const express = require('express')
const router = express.Router()
const layananController = require('../controllers/layanan.controller');

// Create a new layanan
router.post('/', layananController.create);

module.exports = router