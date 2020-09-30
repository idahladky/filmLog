// dependencies
const mongoose = require("mongoose")
require("dotenv").config()
const { MONGODB_URI, DB_NAME } = process.env

// config object
const dbconfig = { useUnifiedTypology: true, useNewUrlParser: true }

// database connection
mongoose.connect(`${MONGODB_URI}${DB_NAME}`, dbconfig)

// database events
const db = mongoose.connection
db.on("open", () => {
    console.log("connected to mongo")
})
.on("close", () => {
    console.log("disconnected from mongo")
})
.on("error", (err) => {
    console.log(err)
})

module.exports = mongoose