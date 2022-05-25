const mongoose = require("mongoose");

const comment = new mongoose.Schema({
  id_review: String,
  user: String,
  content: String,
});

module.exports = mongoose.model("Comment", comment);
