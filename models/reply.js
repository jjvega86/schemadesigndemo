const mongoose = require("mongoose");
const Joi = require("joi");

const replySchema = new mongoose.Schema({
  commentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
    required: true,
  },
  text: { type: String, required: true },
});

replySchema.methods.commentValidate = (reply) => {
  const schema = Joi.object({
    commentId: Joi.string().min(1).max(50).required(),
    text: Joi.string().min(1).max(5000).required(),
  });

  return schema.validate(reply);
};

const Reply = mongoose.model("Reply", replySchema);

module.exports = {
  Reply,
  replySchema,
};
