const Comment = require("../models/comment-model");

const addNewComment = (req, res) => {
  Comment.findOne({ content: req.body.content }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.json({ message: "Comment Already Exists" });
    if (!doc) {
      const newComment = new Comment({
        id_review: req.body.id_review,
        user: req.body.user,
        content: req.body.content,
      });
      await newComment.save();
      res.json({ message: "Comment Added" });
    }
  });
};

module.exports = { addNewComment };
