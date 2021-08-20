const express = require("express");
const router = express.Router();
const { Team } = require("../models/team");

//* Team Endpoints
router.get("/", async (req, res) => {
  try {
    let teams = await Team.find();
    if (!teams) return res.status(400).send(`No teams found!`);

    return res.status(200).send(teams);
  } catch (error) {
    return res.status(500).send(`Internal Server Error: ${err}`);
  }
});

//TODO: GET team by :id

router.post("/", async (req, res) => {
  try {
    let team = {
      name: req.body.name,
      city: req.body.city,
      players: [],
    };
    //TODO: check to see if team already exists using a helper function

    let newTeam = new Team({ team });
    let { error } = newTeam.teamValidate(team);
    if (error) return res.status(400).send(`Body not valid: ${error}`);
    let teamExists = Team.exists({ name: team.name });
    if (teamExists)
      return res.status(400).send(`Team ${team.name} already exists!`);
    await newTeam.save();
    return res.send(newTeam);
  } catch (err) {
    return res.status(500).send(`Internal Server Error: ${err}`);
  }
});

//TODO: PUT team by :id
//TODO: DELETE team by :id

//* Player Endpoints
//TODO: GET all players by :teamId
//TODO: POST new player to team by :teamId
//TODO: GET player by :playerId from team by :teamId
//TODO: PUT player by :playerId from team by :teamId
//TODO: DELETE player by :playerId from team by :teamId

module.exports = router;
