const bcrypt = require("bcryptjs");

const Users = require("../users/users-model.js");

module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    // tells us the browser session is valid
    next();
  } else {
    res.status(401).json({ message: "You are not authorized" });
  }
};
