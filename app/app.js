require("dotenv").config();
const express = require("express");

const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "views/kiwi-school/build")));

app.get("/", (req, res) => {
  res.sendfile(path.join(__dirname, "views/kiwi-school/build/index.html"));
});

module.exports = app;
