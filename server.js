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
const MongoStore = require("connect-mongo")(session);

// routers
const authRouter = require("./controllers/auth/index")
const filmRouter = require("./controllers/filmLogs/index")

// set view engine
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())

// middleware
app.use(
    session({ // SESSIONS, this allows you to use req.session for tracking session data
        secret: SECRET,
        saveUninitialized: false, // don't create session until something stored
        resave: false, //don't save session if unmodified
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
)
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))
// app.use(express.json()) //uncomment if using json
app.use(morgan("tiny")) // logging

// routes
app.get("/", (req,res) => {
    res.render("router connected")
    // res.redirect("/auth/signup")
})
app.use("/auth", authRouter)
app.use("/filmLogs", filmRouter)

// app listener
app.listen(PORT, () => {
    console.log(`Your are listening on port ${PORT}`)
})