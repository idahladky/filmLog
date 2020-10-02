// dependencies
const { Router } = require("express")
const router = Router()
const bcrypt = require("bcryptjs")
const User = require("../../models/auth/index")

// routes

// signup page
router.get("/signup", (req,res) => {
   res.render("auth/Signup")
})

// create new user
router.post("/signup", async (req,res) => {
    req.body.password = await bcrypt.hash(req.body.password, 10)
    const newUser = await User.create(req.body)
    res.redirect("/auth/login")
})

// login page
router.get("/login", (req,res) => {
    res.render("auth/Login")
})

// login post request
router.post("/login", async (req,res) => {
    console.log("hello")
    const user = await User.findOne({ username: req.body.username })
    console.log(user)
    if (user) {
        const check = await bcrypt.compare(req.body.password, user.password)
        if (check) {
            req.session.login = true
            req.session.username = user.username
            res.redirect("/filmLogs/")
        } else {
            res.render("auth/Fail")
        }
    } else {
        res.render("auth/Fail")
    }
})

// logout
router.get("/logout", (req,res) => {
    req.session.destroy()
    res.redirect("/")
})

module.exports = router