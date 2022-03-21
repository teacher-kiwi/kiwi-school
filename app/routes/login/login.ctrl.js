const User = require("../../models/user");

module.exports = {
  login: async (req, res) => {
    const { name, password } = req.body;
    const user = await User.findOne({ name });
    if (user) {
      if (user.password === password) {
        res.json({ success: true });
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
          msg: "명단에 이름이 없습니다. 선생님께 문의하세요.",
        });
      }
    }
  },
};
