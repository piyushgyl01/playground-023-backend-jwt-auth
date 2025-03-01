const mongoose = require("mongoose");

require("dotenv").config();

const MONGOURI = process.env.MONGODB;

const initialiseDatabase = async () => {
  await mongoose
    .connect(MONGOURI)
    .then(() => {
      console.log("Connected to db");
    })
    .catch((e) => console.log("Error connecting to DB", e));
};

module.exports = { initialiseDatabase };
