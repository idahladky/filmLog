// Environmental Variables
require("dotenv").config() // remember to create .env file
const { PORT, SECRET } = process.env

// Dependencies
const express = require("express") // Bringing in Express
const app = express()
const mongoose = require("./db/dbconn") // database connections
const session = require("express-session")
const methodOverride = require("method-override")
const morgan = require("morgan")

// ROUTERS
const authRouter = require("./controllers/auth") // only putting folder is ok bc node.js will automatically look for an index.js file inside it
const testRouter = require("./controllers/test")

// Set View Engine
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())

// middleware
app.use(
  session({ //this allows you to use req.session for tracking session data
    secret: SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === "production" },
  })
);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })) //comment if not using forms
app.use(methodOverride("_method"))
// app.use(express.json()) // uncomment if using json
app.use(morgan("tiny")); //logging

// Routes
app.get("/", (req, res) => {
  res.render("index.jsx", { hello: "Hello World" });
});

app.use("/auth", authRouter);
app.use("/test", testRouter);

// app listener
app.listen(PORT, () => {
  console.log(`Your are listening on port ${PORT}`);
});
