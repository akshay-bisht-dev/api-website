require("dotenv").config();
const mongoose = require("mongoose");
const API_URL = process.env.DB_URL;
const ConnectData = mongoose
  .connect(API_URL)
  .then(() => {
    console.log("Database Connected Successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = ConnectData;
