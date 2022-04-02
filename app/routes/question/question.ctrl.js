const jwt = require("jsonwebtoken");
const Question = require("../../models/question");

const privateKey = process.env.JWT_PRIVATE_KEY;

module.exports = {
  write: async (req, res) => {
    const { token, text, time } = req.body;
    jwt.verify(token, privateKey, (err, decoded) => {
      if (err) {
        res.json({ success: false, msg: "인증 실패" });
      } else {
        const { name } = decoded;

        Question.create({ name, text, time }, dbErr => {
          if (dbErr) {
            res.json({ success: false, msg: "DB오류" });
          } else {
            Question.find({}, (dbErr2, data) => {
              if (dbErr2) {
                res.json({ success: false, msg: "DB오류" });
              } else {
                res.json({ success: true, name, data });
              }
            });
          }
        });
      }
    });
  },
  read: async (req, res) => {
    const { token } = req.body;
    jwt.verify(token, privateKey, (err, decoded) => {
      if (err) {
        res.json({ success: false, msg: "인증 실패" });
      } else {
        const { name } = decoded;
        Question.find({}, (dbErr, data) => {
          if (dbErr) {
            res.json({ success: false, msg: "db오류" });
          } else {
            res.json({ success: true, name, data });
          }
        });
      }
    });
  },
};
