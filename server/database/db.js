const mongoose = require("mongoose");

const URI = process.env.mongodb_URI; 

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connection Successful");
  } catch (error) {
    console.log("Not successful");
    process.exit(0);
  }
};

module.exports = connectDb;
