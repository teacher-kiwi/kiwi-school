const dotenv = require("dotenv");
const express = require("express");
const path = require("path");

dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname, "views/kiwi-school/build")));

app.get("/", (req, res) => {
  res.sendfile(path.join(__dirname, "views/kiwi-school/build/index.html"));
});

module.exports = app;
