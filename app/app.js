require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, "views/kiwi-school/build")));

app.get("/", (req, res) => {
  res.sendfile(path.join(__dirname, "views/kiwi-school/build/index.html"));
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}서버 실행 완료`));
