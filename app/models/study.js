const mongoose = require("mongoose");

const schema = {
  name: String,
  subject: String,
  completed: [String],
};

const Study = mongoose.model("Study", schema);

module.exports = Study;
