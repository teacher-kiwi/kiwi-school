const express = require("express");

const ctrl = require("./study.ctrl");

const router = express.Router();

router.post("/study/complete", ctrl.complete);
router.post("/study/check", ctrl.check);

module.exports = router;
