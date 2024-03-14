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

  const token = jwt.sign({ username: user.username }, process.env.KEY, {
    expiresIn: "1h",
  });
  res.cookie("token", token, { httpOnly: true, maxAge: 360000 });
  return res.json({ status: true, message: "Login Successfully!" });
});

router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ message: "User not registered!" });
    }

    const token = jwt.sign({ id: user._id }, process.env.KEY, {
      expiresIn: "5m",
    });

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "akshay.bisht.dev@gmail.com",
        pass: "7390nm@K",
      },
    });

    const encodedToken = encodeURIComponent(token).replace(/\./g, "%2E");
    var mailOptions = {
      from: "akshay.bisht.dev@gmail.com",
      to: email,
      subject: "Reset Password",
      text: `http://localhost:3000/resetpassword/${encodedToken}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return res.json({ message: "error sending email" });
      } else {
        return res.json({ status: true, message: "email sent" });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/reset-password/:token", async (req, res) => {
  const { token } = req.body;
  const { password } = req.body;

  try {
    const decoded = await jwt.verify(token, process.env.KEY);
    const id = decoded.id;
    const hashpassword = await bcrypt.hash(password, 10);
    await User.findByIdAndUpdate({ _id: id }, { password: hashpassword });
    return res.json({
      status: true,
      message: "Updated Password Successfully!",
    });
  } catch (error) {
    return res.json("Invalid token!");
  }
});

const verifyUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json({ status: false, message: "no token" });
    }
    const decoded = await jwt.verify(token, process.env.KEY);
    next();
  } catch (err) {
    return res.json(err);
  }
};

router.get("/verify", verifyUser, (req, res) => {
  return res.json({ status: true, message: "authorized" });
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ status: true });
});

module.exports = router;
