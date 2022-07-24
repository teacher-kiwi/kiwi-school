require("dotenv").config();
require("./models/index");

const http = require("http");
const SocketIo = require("socket.io");
const express = require("express");
const path = require("path");
const login = require("./routes/login");
const study = require("./routes/study");
const question = require("./routes/question");

const app = express();
const httpServer = http.createServer(app);
const wsServer = SocketIo(httpServer);

app.use(express.json());
app.use("/", login);
app.use("/", study);
app.use("/", question);

app.use(express.static(path.join(__dirname, "views/kiwi-school/build")));
app.use(express.static(path.join(__dirname, "views/kiwi-school/unity")));

app.get("/dinorun", (req, res) => {
  res.sendfile(
    path.join(__dirname, "views/kiwi-school/unity/dinorun/index.html"),
  );
});

app.get("/funguspractice", (req, res) => {
  res.sendfile(
    path.join(__dirname, "views/kiwi-school/unity/funguspractice/index.html"),
  );
});

app.get("/FirstProject", (req, res) => {
  res.sendfile(
    path.join(__dirname, "views/kiwi-school/unity/FirstProject/index.html"),
  );
});

app.get("*", (req, res) => {
  res.sendfile(path.join(__dirname, "views/kiwi-school/build/index.html"));
});

wsServer.on("connection", socket => {
  console.log("접속!");

  socket.on("user-send", data => {
    console.log(data);
    wsServer.emit("broadcast", data);
  });
});

module.exports = httpServer;
