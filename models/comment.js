const mongoose = require("mongoose");
const Joi = require("joi");
const { replySchema } = require("./reply");

const commentSchema = new mongoose.Schema({
  videoId: { type: String, required: true },
  text: { type: String, required: true },
  like: { type: Number },
  dislike: { type: Number },
  replies: [replySchema],
});

commentSchema.methods.commentValidate = (comment) => {
  const schema = Joi.object({
    videoId: Joi.string().min(1).max(50).required(),
    text: Joi.string().min(1).max(5000).required(),
    like: Joi.number().required(),
    dislike: Joi.number().required(),
    replies: Joi.array().optional(),
  });

  return schema.validate(comment);
};

const Comment = mongoose.model("Comment", commentSchema);

module.exports = {
  Comment,
};
