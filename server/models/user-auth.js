const mongoose = require("mongoose");

const createUserSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  confirm_password: {
    type: String,
  },
});

const User = new mongoose.model("User", createUserSchema);

module.exports = User;
