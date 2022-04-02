require("dotenv").config();
require("./models/index");

const express = require("express");
const path = require("path");
const login = require("./routes/login");
const study = require("./routes/study");
const question = require("./routes/question");

const app = express();

app.use(express.json());
app.use("/", login);
app.use("/", study);
app.use("/", question);

app.use(express.static(path.join(__dirname, "views/kiwi-school/build")));

app.get("*", (req, res) => {
  res.sendfile(path.join(__dirname, "views/kiwi-school/build/index.html"));
});

module.exports = app;
