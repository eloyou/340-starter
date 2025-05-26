
const express = require('express');
const router = express.Router();
const errorController = require('../controllers/errorController');

router.get('/error', errorController.error500);

module.exports = router;
