const {
     create_URL_service,
     get_all_URLs_services
     } = require('../services/admin.services');


// Generate url
exports.create_URL = async (req, res, next) => {
    try {
        const result = await create_URL_service(req.query);
        res.status(200).json({
            status: "success",
            message: "Successfully created the url"
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error: "Couldn't generate the url"
        })
    }
};


// Generate url
exports.get_all_URLs = async (req, res, next) => {
    try {
        const result = await get_all_URLs_services();
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