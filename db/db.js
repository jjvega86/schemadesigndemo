const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://jjvega86:UMsL201vRv75iYIm@cluster0.nm4by.mongodb.net/grading?retryWrites=true&w=majority",
      { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
    );
    console.log(`Connected to MongoDb...`);
  } catch (err) {
    console.log(`MongoDb connection failed: ${err}`);
  }
};

module.exports = connectDb;
