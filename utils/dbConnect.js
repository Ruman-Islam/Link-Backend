const mongoose = require("mongoose");
const colors = require("colors");

const DBConnect = () => {
    mongoose
        .connect(process.env.LOCAL_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log(`Database connection is successful 🛢`.cyan.bold);
        })
        .catch(err => console.log('Error message -', err));
};

module.exports = DBConnect;