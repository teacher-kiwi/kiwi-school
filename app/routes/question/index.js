const express = require("express");

const ctrl = require("./question.ctrl");

const router = express.Router();

router.post("/question/write", ctrl.write);
router.post("/question/read", ctrl.read);

module.exports = router;
