const User = require("../../models/user");

const process = {
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
};

module.exports = { process };
