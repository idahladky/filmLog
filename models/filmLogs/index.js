// dependencies
const mongoose = require("mongoose")

// create schema
const filmLogSchema = new mongoose.Schema({
    rollNumber: { type: Number, required: true, unique: true },
    filmManufacturer: String,
    filmType: String,
    filmColor: String,
    camera: String,
    date: Date,
    ISO: Number,
    lens: String,
    exposure: String,
    notes: String
})

// create model
const FilmLog = mongoose.model("FilmLog", filmLogSchema)

module.exports = FilmLog