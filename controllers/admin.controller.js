const { createURLService } = require('../services/admin.services');


// Generate url
exports.createURL = async (req, res, next) => {
    try {
        const result = await createURLService(req.query);
        res.status(200).json({
            status: "success",
            message: "Successfully created the url"
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error: "Couldn't create the brand"
        })
    }
};