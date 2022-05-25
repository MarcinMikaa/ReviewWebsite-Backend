const Review = require("../models/review-model");
const Comment = require("../models/comment-model");

const getReviews = (req, res) => {
  Review.find({})
    .sort({ date: 1 })
    .then(async (data) => {
      const response = await Promise.all(
        data.map(async (rec) => {
          const comments = await Comment.where({ id_review: rec._id });

          return { ...rec._doc, comments };
        })
      );
      res.json(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = { getReviews };
