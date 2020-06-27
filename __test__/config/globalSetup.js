// connect to mongoDB and prolly seed here

console.log(process.env.DB_URL);

require("dotenv").config();
const mongoose = require("mongoose");

module.exports = async () => {
  console.log("\n Attempting to connect to database...");
  try {
    console.log(process.env.DB_URL);
    await mongoose.connect(
      process.env.DB_URL,
      {
        useNewUrlParser: true, // for connection warning
        useUnifiedTopology: true,
      },
      () => {
        console.log("\n Database connection has been established successfully");
      }
    );
  } catch (err) {
    console.error("Error connecting to database", err.stack);
    process.exit(1);
  }
};
