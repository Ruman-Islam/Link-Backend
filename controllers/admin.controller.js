const path = require("path");
const {
  create_URL_service,
  get_all_user_service,
  get_specific_userinfo_service,
  runForLoop,
} = require("../services/admin.services");

// Create user
exports.create_user = async (req, res, next) => {
  const data = { ...req.body };
  let url = `https://link-black.vercel.app/`;
  const uid = Date.now().toString(36) + Math.random().toString(36).substr(2);
  data.uid = uid;
  try {
    const result = await create_URL_service(data);
    if (result?.payment_method.includes("Cash Planet")) {
      url = `${url}api/v1/admin/specific_url?payment=Cash_Planet&uid=${result?.uid}`;
    } else if (result?.payment_method.includes("Kistloan Payment")) {
      url = `${url}api/v1/admin/specific_url?payment=Kistloan_Payment&uid=${result?.uid}`;
    } else {
      url = `${url}api/v1/admin/specific_url?payment=RupeeStar&uid=${result?.uid}`;
    }
    res.status(200).json({
      status: "success",
      message: "Successfully created the user",
      url: url,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error,
      message: "Couldn't create the user",
    });
  }
};

// Get all urls
exports.get_all_user = async (req, res, next) => {
  try {
    const result = await get_all_user_service();
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: "No data found",
    });
  }
};

// Get specific user info url
exports.get_specific_userinfo = async (req, res, next) => {
  try {
    const result = await get_specific_userinfo_service(req.query.uid);
    if (!result) {
      return res.status(400).json({
        status: "fail",
        error: "Couldn't find user with this uid",
      });
    }
    // res.status(200).json({
    //   status: "success",
    //   data: result,
    // });
    res.sendFile("test.html", { root: "./public" });
    return res.render("payment.ejs", {
      amount: result?.amount,
      name: result?.name,
      vpa_upi: result?.vpa_upi,
      pm: result?.payment_method,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: "No data found",
    });
  }
};

// Get success page
exports.get_success_html = async (req, res, next) => {
  try {
    // res.sendFile("success.html", { root: "./public/html" });
    // res.sendFile("html/success.html");
    res.sendFile(path.join(__dirname, "../public/html/success.html"));
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: "No data found",
    });
  }
};
