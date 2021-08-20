const mongoose = require("mongoose");
const Joi = require("joi");
//TODO: bring in Joi for validation on playerSchema and teamSchema and export functions https://gist.github.com/stongo/6359042

const playerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  rating: { type: Number, required: true },
});

playerSchema.methods.playerValidate = (player) => {
  const schema = Joi.object({
    //TODO: Fill in properties and return schema.validate(player)
  });
};

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  players: [playerSchema],
});

const Player = mongoose.model("Player", playerSchema);
const Team = mongoose.model("Team", teamSchema);

module.exports = {
  Player,
  Team,
};
