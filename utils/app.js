const express = require("express");
const app = express();
const cors = require("cors");

// ROUTES IMPORT //
const adminRoute = require("../routes/v1/admin.route");

// APPLICATION MIDDLEWARE //
app.use(cors());
app.use(express.json());
app.use(express.static("./public"));
app.set("view engine", "ejs");

// APPLICATION ROUTES //
app.use("/kistloanpayment14980/api/v1/admin", adminRoute);
app.use("/cashplanetpat5670/api/v1/admin", adminRoute);

// app.get("/", (req, res) =>
//   res.status(200).send("WELCOME TO THE USER LINK GENERATOR!")
// );
app.get("/", function (req, res) {
  res.render("payment");
});
app.all("*", (req, res) => res.status(200).send("NO ROUTE FOUND."));

module.exports = app;
