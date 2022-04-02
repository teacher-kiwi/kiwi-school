const mongoose = require("mongoose");

const schema = {
  name: String,
  text: String,
  time: Date,
};

const Question = mongoose.model("Question", schema);

module.exports = Question;
