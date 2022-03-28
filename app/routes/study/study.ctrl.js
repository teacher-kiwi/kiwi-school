const jwt = require("jsonwebtoken");
const Study = require("../../models/study");

const privateKey = process.env.JWT_PRIVATE_KEY;

function findName(token) {
  return jwt.verify(token, privateKey, (err, data) => {
    if (err) return null;
    return data.name;
  });
}

module.exports = {
  complete: async (req, res) => {
    const { subject, id, token } = req.body;
    const name = findName(token);
    const studyData = await Study.findOne({ name, subject });
    if (studyData) {
      await Study.updateOne(
        { name, subject },
        { $addToSet: { completed: id } },
      );
    } else {
      await Study.create({ name, subject, completed: [id] });
    }

    res.json({ sucess: true });
  },
  check: async (req, res) => {
    const { token } = req.body;
    const name = findName(token);
    const studyData = await Study.find({ name });

    res.json({ sucess: true, studyData });
  },
};
