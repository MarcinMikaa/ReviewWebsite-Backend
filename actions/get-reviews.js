const Review = require("../models/review-model");

const getReviews = (req, res) => {
  Review.find({})
    .sort({ date: 1 })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = { getReviews };
