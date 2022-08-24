const mongoose = require("mongoose");

const connection = () => {
  mongoose.connect("mongodb://localhost:27017/universityDB", (err) => {
    if (err) {
      console.error(err);
      process.exit(-1);
    }
    console.log("Successfully connected to MongoDB");
  });
};

module.exports = { connection };
