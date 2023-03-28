// const fs = require('fs');
// const path = require('path');
const Customer = require("../models/Link");

// Create user
exports.create_URL_service = async (data) => {
  const result = await Customer.create(data);
  return result;
  // const dirname = `${__dirname}../../public/users.json`;
  // const file = path.join(dirname);
  // const user_data = await JSON.parse(fs.readFileSync(file));
  // const new_user_data = data;
  // user_data.push(new_user_data);
  // fs.writeFileSync(file, JSON.stringify(user_data));
};

// Get all urls
exports.get_all_user_service = async () => {
  const result = await Customer.find({});
  return result;
  // const file = path.join(process.cwd(), "./public/users.json");
  // const user_data = await JSON.parse(fs.readFileSync(file));
  // return user_data;
};

// Get specific user info url
exports.get_specific_userinfo_service = async (id) => {
  const result = await Customer.findOne({ uid: id });
  return result;
  // const dirname = `${__dirname}../../public/users.json`;
  // const file = path.join(dirname);
  // const user_data = await JSON.parse(fs.readFileSync(file));
  // const specific_user_data = user_data.find((user) => user.email === email);
  // return specific_user_data;
};