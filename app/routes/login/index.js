const express = require("express");

const ctrl = require("./login.ctrl");

const router = express.Router();

router.post("/login", ctrl.login);
router.post("/join", ctrl.join);

module.exports = router;
