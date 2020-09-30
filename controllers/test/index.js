// dependencies
const { Router } = require("express")
const router = Router()
const auth = require("../authmiddleware")

// routes
router.get("/", auth, (req, res) => { // auth is a middleware. you can put in as many as you want. it will check for routes in the order they are listed, so this will first check the auth middleware in server.js before moving on to req,res
  res.send("if you see this you are logged in");
});

module.exports = router;
