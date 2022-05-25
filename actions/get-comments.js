const Comment = require("../models/comment-model");

const getComments = (req, res) => {
  Comment.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = { getComments };
