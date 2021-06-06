const dbcontroller = require("./dbconroller");

exports.register = async (req, res) => {
  try {
    await dbcontroller.register(req, res);
  } catch (error) {
    res.send({ error: "Error in calling dbcontroller." });
  }
};

exports.login = async (req, res) => {
  try {
    await dbcontroller.login(req, res);
  } catch (error) {
    res.send({ error: "Error in calling dbcontroller." });
  }
};

exports.userlogin = async (req, res) => {
  try {
    await dbcontroller.userlogin(req, res);
  } catch (error) {
    res.send({ error: "Error in calling dbcontroller." });
  }
};

exports.updatePassword = async (req, res) => {
  try {
    await dbcontroller.updatePassword(req, res);
  } catch (error) {
    res.send({ error: "Error in calling dbcontroller." });
  }
};
