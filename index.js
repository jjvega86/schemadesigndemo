//* All imports needed for the API to function
const express = require("express");
const cors = require("cors");
const connectDb = require("./db/db");
require("dotenv").config();

//* Route imports
const teams = require("./routes/teams");
const comments = require("./routes/comments");

//* Creating an instance of the Express app
const app = express();

//* Imported function to connect with MongoDb cluster
connectDb();

//* Using middleware (CORS and Express' built in JSON body parser)
app.use(cors());
app.use(express.json());
app.use("/api/teams", teams);
app.use("/api/comments", comments);

//* Defining the PORT our server will run on using an environmental variable or default value
const port = process.env.PORT || 5000;

//* Calling the "listen" function that will open our server for business!
app.listen(port, () => {
  console.log(`Server active on PORT ${port}`);
});
