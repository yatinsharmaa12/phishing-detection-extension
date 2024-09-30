const express = require('express');
const router = express.Router();
const phishingController = require('../controllers/phishingController');

// Example route
router.post('/report', phishingController.reportPhishing);
router.get('/check-url', phishingController.checkUrl);

module.exports = router;
