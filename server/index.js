require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const UserRouter = require("./routes/User_Routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("./database/Database");

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true
}));
app.use(cookieParser());
app.use("/auth", UserRouter);

app.get("/", (req, res) => {
  res.send("Hello Server!");
});
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
