const bcrypt = require("bcryptjs");
const User = require("../models/user-model");

const register = (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.json({ message: "User Already Exists" });
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      });
      await newUser.save();
      res.json({ message: "User Created" });
    }
  });
};

module.exports = { register };
