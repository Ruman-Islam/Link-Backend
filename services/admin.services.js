const fs = require('fs');
const path = require('path');



// Generate url
exports.create_URL_service = async (data) => {
    const file = path.resolve(process.cwd(), "./public/users.json");
    const user_data = await JSON.parse(fs.readFileSync(file));
    const new_user_data = data;
    user_data.push(new_user_data);
    fs.writeFileSync(file, JSON.stringify(user_data));
};


// Get all urls
exports.get_all_URL_service = async () => {
    const file = path.join(process.cwd(), "./public/users.json");
    const user_data = await JSON.parse(fs.readFileSync(file));
    return user_data;
};