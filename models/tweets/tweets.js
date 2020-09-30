// IMPORT SCHEMA AND MODEL

const { Schema, model } = require("mongoose");

// CREATE SCHEMA
const tweetSchema = new Schema({
  username: { type: String, required: true },
  tweet: { type: String, required: true },
});

// CREATE MODEL
const Tweet = model("tweet", tweetSchema);

module.exports = User;