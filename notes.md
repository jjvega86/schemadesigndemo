# Notes

- Changing the database name in the connection string for a cluster automatically creates
  the new collection as soon as you POST a new document
- Create a team.js in models with team and player schemas/models
- Then, create a single teams.js routes file with all routes
- player models are subdocuments on teams.js
- show alternative using object references on teams (or players)
