const fs = require('fs');
const path = require('path');



// Generate url
exports.createURLService = async (data) => {
    const file = path.join(process.cwd(), "./public/users.json");
    const user_data = await JSON.parse(fs.readFileSync(file));
    const new_user_data = data;
    user_data.push(new_user_data);
    fs.writeFileSync(file, JSON.stringify(user_data));

};