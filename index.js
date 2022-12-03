require("dotenv").config();
const colors = require("colors");
const port = process.env.PORT || 8080;
// const DBConnect = require("./utils/dbConnect");

const app = require("./utils/app");

// Database connection
// DBConnect();

// server
app.listen(port, () => {
    console.log(`App is running on port ${port}`.yellow.bold);
});