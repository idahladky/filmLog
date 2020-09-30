// database connection
const mongoose = require("./dbconn")

// import models

// data to seed
const seed = [
    {
        rollNumber: 001,
        filmManufacturer: "Kodak",
        filmType: "Ultramax",
        filmColor: "color",
        camera: 'Pentax K1000',
        date: '2020-01-31',
        ISO: 300,
        lens: "52mm",
        exposure: "aperture 5.8, shutter speed 180",
        notes: "Frame 27 aperture changed to 4.0, shutter speed 250"
    }, 
    {
        rollNumber: 002,
        filmManufacturer: "Kodak",
        filmType: "Ultramax",
        filmColor: "color",
        camera: 'Pentax K1000',
        date: '2020-02-27',
        ISO: 400,
        lens: "52mm",
        exposure: "aperture 5.8, shutter speed 180",
        notes: "Portland, ME"
    }
]

// seed the data

module.exports = seed