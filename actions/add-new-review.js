const Review = require("../models/review-model");

const addNewReview = (req, res) => {
  Review.findOne({ title: req.body.title }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.json({ message: "Review Already Exists" });
    if (!doc) {
      const newReview = new Review({
        title: req.body.title,
        content: req.body.content,
        date: req.body.date,
        grade: req.body.grade,
        url: req.body.url,
      });
      await newReview.save();
      res.json({ message: "Review Created" });
    }
  });
};

module.exports = {addNewReview};