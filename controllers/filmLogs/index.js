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
        res.render("filmLogs/Index", {filmLogs})
    } catch (error) {
        console.log(error)
    }
})

// N // new
router.get("/new", auth, (req, res) => {
    res.render("filmLogs/New")
})

// D // delete
router.delete("/:id", auth, (req,res) => {
    FilmLog.findByIdAndDelete(req.params.id)
    res.redirect("/filmLogs")
})

// U // update
// C // create
router.post("/", auth, async (req,res) => {
    req.body.username = req.session.username
    const newLog = await FilmLog.create(req.body)
    res.redirect("/filmLogs/")
})

// E // edit
// S // show

// authorization middleware
router.get("/", auth, (req, res) => {
    res.send("if you see this you are logged in");
});

module.exports = router