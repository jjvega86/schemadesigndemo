const express = require("express");
const router = express.Router();
const { Comment } = require("../models/comment");
const { Reply } = require("../models/reply");

//* All Comments endpoints

// get all comments by videoId
// TESTED SUCCESS
router.get("/:videoId", async (req, res) => {
  try {
    let comments = await Comment.find({ videoId: req.params.videoId });
    if (!comments)
      return res
        .status(400)
        .send(`Comments for video ID ${req.params.videoId} do not exist!`);
    return res.send(comments);
  } catch (error) {
    return res.status(500).send(`Internal Server Error: ${error}`);
  }
});

// Add post comment (use videoId in body of request)
// TESTED SUCCESS
router.post("/", async (req, res) => {
  try {
    let data = {
      videoId: req.body.videoId,
      text: req.body.text,
      like: 0,
      dislike: 0,
      replies: [],
    };

    let newComment = new Comment(data);
    let { error } = newComment.commentValidate(req.body);
    if (error) return res.status(400).send(`Body not valid: ${error}`);
    await newComment.save();
    return res.send(newComment);
  } catch (error) {
    return res.status(500).send(`Internal Server Error: ${error}`);
  }
});

//TODO: Add post reply by commentId and test
router.post("/:commentId/reply", async (req, res) => {
  try {
    let data = {
      commentId: req.params.commentId,
      text: req.body.text,
    };

    let newReply = new Reply(data);
    let { error } = newReply.replyValidate(req.body);
    if (error) return res.status(400).send(`Body not valid: ${error}`);
    await newReply.save();
    return res.send(newComment);
  } catch (error) {
    return res.status(500).send(`Internal Server Error: ${error}`);
  }
});

module.exports = router;
