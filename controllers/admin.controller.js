const {
     create_URL_service,
     get_all_user_service,
     get_specific_userinfo_service
     } = require('../services/admin.services');


// Create user
exports.create_user = async (req, res, next) => {
    try {
        const result = await create_URL_service(req.query);
        res.status(200).json({
            status: "success",
            message: "Successfully created the user"
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error: "Couldn't create the user"
        })
    }
};


// Get all urls
exports.get_all_user = async (req, res, next) => {
    try {
        const result = await get_all_user_service();
        res.status(200).json({
            status: "success",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error: "No data found"
        })
    }
};


// Get specific user info url
exports.get_specific_userinfo = async (req, res, next) => {
    try {
        const result = await get_specific_userinfo_service(req.query.email);
        if (!result) {
            return res.status(400).json({
                status: 'fail',
                error: "Couldn't find user with this email"
            })
        }
        res.status(200).json({
            status: "success",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error: "No data found"
        })
    }
};