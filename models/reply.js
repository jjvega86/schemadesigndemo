const mongoose = require("mongoose");
const Joi = require("joi");

const replySchema = new mongoose.Schema({
  text: { type: String, required: true },
});

replySchema.methods.replyValidate = (reply) => {
  const schema = Joi.object({
    text: Joi.string().min(1).max(5000).required(),
  });

  return schema.validate(reply);
};

const Reply = mongoose.model("Reply", replySchema);

module.exports = {
  Reply,
  replySchema,
};
