const express = require("express");
const router = express.Router();
const { Comment } = require("../models/comment");
const { Reply } = require("../models/reply");

//* All Comments endpoints
//TODO: Add get all comments by videoId
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
//TODO: Add post comment by videoId
//TODO: Add post reply by commentId

module.exports = router;
