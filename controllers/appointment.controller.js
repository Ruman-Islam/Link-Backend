const { User, Appointment } = require("../models/Appointment");

exports.signUp = async (req, res) => {
  try {
    const post = req.body;
    const result = await User.create(post);

    return result
      ? res.status(200).json({
          status: "success",
          result,
        })
      : res.status(400).json({
          status: "fail",
          error: "Try Again!",
        });
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      error: "Something Went Wrong!",
    });
  }
};

exports.signIn = async (req, res) => {
  try {
    const post = req.body;
    const result = await User.findOne({ email: post.email });
    if (result) {
      if (result.password === post.password) {
        return res.status(200).json({
          status: "success",
          result,
        });
      } else {
        return res.status(400).json({
          status: "fail",
          error: "Password doesn't match!",
        });
      }
    } else {
      return res.status(400).json({
        status: "fail",
        error: "No User Found!",
      });
    }
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      error: "Something Went Wrong!",
    });
  }
};

exports.makeAppointment = async (req, res) => {
  try {
    const data = req.body;
    data.ticketNo =
      Date.now().toString(36) + Math.random().toString(36).substring(2);
    const result = await Appointment.create(data);

    return result
      ? res.status(200).json({
          status: "success",
          result,
        })
      : res.status(200).json({
          status: "fail",
          error: "Try again!",
        });
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      error: "Something Went Wrong!",
    });
  }
};

exports.checkAppointment = async (req, res) => {
  const { date } = req.query;
  const searchDate = `August ${date} 2022`;
  try {
    const result = await Appointment.find({ date: searchDate });
    return res.status(200).json({
      status: "success",
      result,
    });
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      error: "Something Went Wrong!",
    });
  }
};
