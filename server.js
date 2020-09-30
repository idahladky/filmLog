// environmental variables
require("dotenv").config()
const { PORT, SECRET } = process.env

// dependencies
const express = require("express")
const app = express()
const mongoose = require("./db/dbconn")
const session = require("express-session")
const methodOverride = require("method-override")
const morgan = require("morgan")

// routers
const authRouter = require("./controllers/auth/index")
const filmRouter = require("./controllers/filmLogs/index")

// set view engine
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())

// middleware
app.use(
    session({
        secret: SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: process.env.NODE_ENV === "production" },
    })
)
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("method"))
// app.use(express.json()) //uncomment if using json
app.use(morgan("tiny")) // logging

// routes
app.get("/", (req,res) => {
    res.render("router connected")
})
app.use("/auth", authRouter)
app.use("/filmLogs", filmRouter)

// app listener
app.listen(PORT, () => {
    console.log(`Your are listening on port ${PORT}`)
})