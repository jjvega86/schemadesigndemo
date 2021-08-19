const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  rating: { type: Number, required: true },
});

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
