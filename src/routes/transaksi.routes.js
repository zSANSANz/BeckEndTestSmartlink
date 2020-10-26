const express = require('express')
const router = express.Router()
const transaksiController = require('../controllers/transaksi.controller');

// Create a new layanan
router.post('/', transaksiController.create);

module.exports = router