const express = require("express");

const ctrl = require("./login.ctrl");

const router = express.Router();

router.post("/login/login", ctrl.login);
router.post("/login/join", ctrl.join);
router.post("/login/authorize", ctrl.authorize);

module.exports = router;
