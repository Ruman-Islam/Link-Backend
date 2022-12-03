const express = require('express');
const adminController = require('../../controllers/admin.controller');
const router = express.Router();


// Generate url
router
    .route("/url")
    .post(adminController.createURL)

module.exports = router;