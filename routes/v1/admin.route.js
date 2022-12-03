const express = require('express');
const adminController = require('../../controllers/admin.controller');
const router = express.Router();


// Generate url
router
    .route("/url")
    .get(adminController.get_all_URLs)
    .post(adminController.create_URL)

module.exports = router;