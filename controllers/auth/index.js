// DEPENDENCIES
const { Router } = require("express")
const router = Router()
const bcrypt = require("bcryptjs") // bcrypt is standard
const User = require("../../models/auth")

// ROUTES
router.get("/signup", (req, res) => { // signup page
  res.render("auth/signup.jsx") //file is in auth folder
});

// CREATE NEW USER POST REQUEST
router.post("/signup", async (req, res) => { // async
  req.body.password = await bcrypt.hash(req.body.password, 10) // encrypt the password. "await" till the promise resolves, then put it in the variable. hash creates the encryption
  const newUser = await User.create(req.body) // save new user in database
  res.redirect("/auth/login")  // Redirect to login page
});

// LOGIN PAGE
router.get("/login", (req, res) => {
  res.render("auth/login.jsx")
});

// LOGIN POST REQUEST
router.post("/login", async (req, res) => {
  const user = await User.find({ username: req.body.username }) // find user. use findOne() instead
  if (user.length > 0) { // check if user was found
    const check = await bcrypt.compare(req.body.password, user[0].password)  // compare password
    if (check) {
      req.session.login = true // in session, save info of username and that user is logged in. session gets rid of the info once the user is logged out
      req.session.username = user[0].username
      res.redirect("/")
    } else {
      res.render("auth/fail.jsx") // Redirect to login page if failed
    }
  } else {
    res.render("auth/fail.jsx") // Redirect to login page if failed
  }
})

//LOGOUT
router.get("/logout", (req, res) => {
  req.session.destroy() // ensures that sessions info is deleted
  res.redirect("/")
});

module.exports = router;
