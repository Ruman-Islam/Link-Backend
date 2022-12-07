const express = require("express");
const adminController = require("../../controllers/admin.controller");
const router = express.Router();

// Create user
router
  .route("/url")
  .get(adminController.get_all_user)
  .post(adminController.create_user);

router.route("/specific_url").get(adminController.get_specific_userinfo);

router.route("/success").get(adminController.get_success_html);

module.exports = router;
