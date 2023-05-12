const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
});

const appointmentSchema = mongoose.Schema({
  ticketNo: { type: String },
  name: { type: String },
  email: { type: String },
  date: { type: String },
  time: { type: String },
  service: { type: String },
  shop: { type: String },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
  Appointment,
};
