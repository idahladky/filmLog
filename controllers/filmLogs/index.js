// dependencies
const { Router } = require("express")
const router = Router()
const auth = require("../authmiddleware")
const FilmLog = require("../../models/filmLogs/index")

// routes

// I // index
router.get("/", async (req,res) => {
    try {
        const filmLogs = await FilmLog.find({username: req.session.username})
        res.render("auth/filmLogs/Index", {filmLogs})
    } catch (error) {
        console.log(error)
    }
})

// N // new
// D // delete
// U // update
// C // create
// E // edit
// S // show

// authorization middleware
router.get("/", auth, (req, res) => {
    res.send("if you see this you are logged in");
  });