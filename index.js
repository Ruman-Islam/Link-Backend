require("dotenv").config();
const colors = require("colors");
const port = process.env.PORT || 8080;
const dbConnect = require("./utils/dbConnect");

const app = require("./utils/app");

// Database connection
dbConnect();

app.get("/", (req, res) =>
  res.status(200).send("WELCOME TO THE USER LINK GENERATOR!")
);

// server
app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});
