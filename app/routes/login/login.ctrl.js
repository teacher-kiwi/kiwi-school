const jwt = require("jsonwebtoken");
const User = require("../../models/user");

const privateKey = process.env.JWT_PRIVATE_KEY;

const newToken = async name => {
  const token = await jwt.sign({ name }, privateKey, {
    expiresIn: 60 * 60 * 24,
  });
  return token;
};

module.exports = {
  login: async (req, res) => {
    const { name, password } = req.body;
    const user = await User.findOne({ name });
    if (user) {
      if (user.password === password) {
        const token = await newToken(name);
        res.json({ success: true, token });
      } else {
        res.json({ success: false, msg: "비밀번호가 틀렸습니다." });
      }
    } else {
      res.json({ success: false, msg: "가입된 이름이 없습니다." });
    }
  },

  join: async (req, res) => {
    const { name, password } = req.body;
    const user = await User.findOne({ name });
    if (user) {
      res.json({ success: false, msg: "이미 가입된 이름입니다." });
    } else {
      const studentList = JSON.parse(process.env.STUDENT_LIST);
      if (studentList.includes(name)) {
        await User.create({ name, password });
        res.json({ success: true });
      } else {
        res.json({
          success: false,
          msg: "우리반 학생이 아닙니다.",
        });
      }
    }
  },

  authorize: async (req, res) => {
    const { token } = req.body;
    jwt.verify(token, privateKey, async (err, decoded) => {
      if (err) {
        res.json({ success: false, msg: "로그인 인증 실패" });
      } else {
        res.json({ success: true, token: await newToken(decoded.name) });
      }
    });
  },
};
