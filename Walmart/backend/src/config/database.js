// Modules
const { MongoClient } = require("mongodb");
require("dotenv").config();

// Variables
const uri = process.env.CONNECTION_STRING;

if (!uri) {
  throw new Error("Invalid Database Endpoint");
}

// Function for getting connected to the database
const connectToDatabase = async (req, res) => {
  try {
    const mongoClient = await new MongoClient(uri).connect();

    // Checking if the connection is succeeded
    mongoClient.on("connectionCheckedIn", () => {
      console.log(`Server is UP & Running...`);
      console.log("Database Connected Successfully");
    });

    // Checking if the connection fails to connect to the database
    mongoClient.on("error", () => {
      console.log("MongoDB connection refused", error);
    });

    return mongoClient;
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

module.exports = connectToDatabase;
