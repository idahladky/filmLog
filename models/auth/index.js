// import schema and model
const { Schema, model } = require("mongoose")

// create schema
const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

// create model
const User = model("user", userSchema)

module.exports = User