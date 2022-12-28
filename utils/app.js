const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

// ROUTES IMPORT //
const adminRoute = require("../routes/v1/admin.route");

// APPLICATION MIDDLEWARE //
app.use(cors());
app.use(express.json());
// app.use(express.static("./public"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "../public")));
app.set("views", path.join(__dirname, "../views/pages"));

// APPLICATION ROUTES //
app.use("/api/v1/admin", adminRoute);

app.get("/", (req, res) =>
  res.status(200).send("WELCOME TO THE USER LINK GENERATOR!")
);

app.all("*", (req, res) => res.status(200).send("NO ROUTE FOUND."));

module.exports = app;
