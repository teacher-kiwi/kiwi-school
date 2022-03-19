const express = require("express");

const ctrl = require("./login.ctrl");

const router = express.Router();

router.post("/login", ctrl.process.login);

module.exports = router;
