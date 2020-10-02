// database connection
const mongoose = require("mongoose")

// import models
const FilmLog = require("../models/filmLogs/index")

// data to seed
const seed = [
    {
        rollNumber: 1,
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
        rollNumber: 2,
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
// seed.forEach((film) => {
//     FilmLog.create(film, (err, success) => {
//         if (success) {
//             console.log("we did it!")
//         }
//     })
// })

module.exports = seed