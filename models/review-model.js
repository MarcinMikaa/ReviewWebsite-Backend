const mongoose = require("mongoose");

const review = new mongoose.Schema({
  title: String,
  content: String,
  director: String,
  scenario: String,
  genre: String,
  production: String,
  date: Date,
  grade: Number,
  url: String,
});

module.exports = mongoose.model("Review", review);
