const URL = require("../models/url");
const User = require("../models/user");

async function handleUserSignup(req, res) {
  const { name, password, email } = req.body;
  User.create({
    name,
    email,
    password,
  });
  return res.redirect("/");
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) {
    res.render("login", {
      error: "Invalid Credentials",
    });
  }
  const urls = await URL.find({});
  res.redirect("/");
}

module.exports = {
  handleUserSignup,
  handleUserLogin,
};
