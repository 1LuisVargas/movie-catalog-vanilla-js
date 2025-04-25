// Requiring dotenv and mongoose
require("dotenv").config();
const mongoose = require("mongoose");

// Connecting to the database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

// Exporting the function
module.exports = connectDB;
