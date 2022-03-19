const dotenv = require("dotenv");
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.MONGODB_URL);

const app = express();

const login = require("./routes/login");

app.use(express.json());
app.use("/", login);

app.use(express.static(path.join(__dirname, "views/kiwi-school/build")));

app.get("*", (req, res) => {
  res.sendfile(path.join(__dirname, "views/kiwi-school/build/index.html"));
});

module.exports = app;
