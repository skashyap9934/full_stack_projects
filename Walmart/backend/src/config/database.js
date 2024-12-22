require("dotenv").config();
const mongoose = require("mongoose");

const connectToDatabase = () => {
  mongoose.connect(`${process.env.CONNECTION_STRING}`);
};

module.exports = { connectToDatabase };
