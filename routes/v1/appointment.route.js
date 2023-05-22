const express = require("express");
const appointmentController = require("../../controllers/appointment.controller");
const router = express.Router();

router.route("/").post(appointmentController.makeAppointment);
router.route("/check").get(appointmentController.checkAppointment);
router.route("/sign_up").post(appointmentController.signUp);
router.route("/sign_in").post(appointmentController.signIn);
router.route("/analytics").get(appointmentController.analytics);

module.exports = router;
