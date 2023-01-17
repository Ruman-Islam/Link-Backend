const mongoose = require("mongoose");

const Customer_Schema = mongoose.Schema({
  uid: {
    type: String,
    required: [true, "Please provide a unique ID"],
  },
  amount: {
    type: Number,
    required: [true, "Please provide amount"],
  },
  name: {
    type: String,
    required: [true, "Please provide username"],
  },
  vpa_upi: {
    type: String,
    required: [true, "Please provide vpa/upi"],
  },
  pm: {
    type: String,
  },
});

const Customer = mongoose.model("Customer", Customer_Schema);

module.exports = Customer;
