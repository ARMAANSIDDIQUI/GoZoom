const express = require('express');
const router = express.Router();
const { submitEnquiry } = require('../controllers/enquiryController');

router.post('/submit', submitEnquiry);

module.exports = router;
