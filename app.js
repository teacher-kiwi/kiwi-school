require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
  res.sendfile(path.join(__dirname, "build/index.html"));
});

app.listen(process.env.PORT, () => console.log("서버 실행 완료"));
