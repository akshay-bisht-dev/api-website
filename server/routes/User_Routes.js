const bcrypt = require("bcrypt");

const express = require("express");
const User = require("../models/User-Auth");
const router = express.Router();
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

router.post("/signup", async (req, res) => {
  const { username, email, password, confirm_password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    return res.json({ message: "User already existed!" });
  }

  const hashpassword = await bcrypt.hash(password, 10);
  const confrimHashPassword = await bcrypt.hash(confirm_password, 10);
  const newUser = new User({
    username,
    email,
    password: hashpassword,
    confirm_password: confrimHashPassword,
  });

  await newUser.save();
  return res.json({ status: true, message: "Record Regsitered Successfully!" });
});


router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.json({ message: "User doesn't existed!" });
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.json({ message: "Invalid password" });
  }

  const token = jwt.sign({ username: user.username }, process.env.KEY, { expiresIn: "1h" });
  res.cookie('token', token, { httpOnly: true, maxAge: 360000 });
  return res.json({ status: true, message: "Login Successfully!" })
});


router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ message: "User not registered!" });
    }

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'youremail@gmail.com',
        pass: 'yourpassword'
      }
    });

    var mailOptions = {
      from: 'youremail@gmail.com',
      to: 'myfriend@yahoo.com',
      subject: 'Sending Email using Node.js',
      text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

  } catch (error) {
    console.log(error);
  }
})

module.exports = router;
