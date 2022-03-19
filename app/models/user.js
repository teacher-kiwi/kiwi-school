const mongoose = require("mongoose");

const schema = {
  name: String,
  password: String,
};

const User = mongoose.model("User", schema);

module.exports = User;
