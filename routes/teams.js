const express = require("express");
const router = express.Router();
const { Team } = require("../models/team");

router.get("/", async (req, res) => {
  //TODO: make a Mongoose query to get all teams (wrap in try catch)
  console.log("You got teams!");
  return res.status(200).send("Success!");
});

router.post("/", async (req, res) => {
  try {
    //TODO: validate body of request and check to see if team already exists
    let newTeam = new Team({
      name: req.body.name,
    });
    newTeam.save();
    return res.send(newTeam);
  } catch (err) {
    return res.status(500).send(`Internal Server Error: ${err}`);
  }
});

module.exports = router;
