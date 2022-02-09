const mongoose = require("mongoose");

const review = new mongoose.Schema({
  title: String,
  content: String,
  date: Date,
  grade: Number,
  url: String,
});

module.exports = mongoose.model("Review", review);