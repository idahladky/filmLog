// dependencies
const { Router } = require("express")
const router = Router()
const auth = require("../authmiddleware")
const FilmLog = require("../../models/filmLogs/index")

// routes

// I // index
// with auth
// router.get("/", async (req,res) => {
//     try {
//         const filmLogs = await FilmLog.find({username: req.session.username})
//         res.render("filmLogs/Index", {filmLogs})
//     } catch (error) {
//         console.log(error)
//     }
// })
// without auth
router.get("/", (req,res) => {
    FilmLog.find({}, (error, allLogs) => {
        res.render("filmLogs/Index", {
            filmLogs: allLogs
        })
    })
})

// N // new
// with auth
// router.get("/new", auth, (req, res) => {
//     res.render("filmLogs/New")
// })
// without auth
router.get("/new", (req, res) => {
    res.render("filmLogs/New")
})

// D // delete
// with auth
// router.delete("/:id", auth, (req,res) => {
//     FilmLog.findByIdAndDelete(req.params.id)
//     res.redirect("/filmLogs")
// })
// without auth
router.delete("/:id", (req,res) => {
    FilmLog.findByIdAndDelete(req.params.id)
    res.redirect("/filmLogs/")
})

// U // update
// with auth
// without auth

// C // create
// with auth
// router.post("/", auth, async (req,res) => {
//     req.body.username = req.session.username
//     const newLog = await FilmLog.create(req.body)
//     res.redirect("/filmLogs/")
// })
// without auth
router.post("/", (req,res) => {
    FilmLog.create(req.body, (error, createdFilmLog) => {
        res.redirect("/filmLogs/")
    })
})

// E // edit
// with auth
// without auth

// S // show
// with auth
// without auth
router.get("/:id", (req,res) => {
    FilmLog.findById(req.params.id, (error, foundLog) => {
        res.render("filmLogs/Show", {
            filmLog: foundLog
        })
    })
})



module.exports = router