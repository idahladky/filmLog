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
//     try {
//         res.render("filmLogs/New")
//     } catch (error) {
//         console.log(error)
//     }
// })
// without auth
router.get("/new", (req, res) => {
    res.render("filmLogs/New")
})

// D // delete
// with auth
// router.delete("/:id", auth, (req,res) => {
//     try {
//         FilmLog.findByIdAndDelete(req.params.id)
//         res.redirect("/filmLogs")
//     } catch (error) {
//         console.log(error)
//     }   
// })
// without auth
router.delete("/:id", (req,res) => {
    FilmLog.findByIdAndRemove(req.params.id, (error, data) => {
        res.redirect("/filmLogs/")
    }) 
})

// U // update
// with auth
// router.put("/edit/:id", auth, async (req,res) => {
//     try {
//         req.body.username = req.session.username
//         await FilmLog.findByIdAndUpdate(req.params.id, req.body)
//         res.redirect("/filmLogs/")    
//     } catch (error) {
//         console.log(error)
//     }
// })
// without auth
router.put("/edit/:id", (req,res) => {
    FilmLog.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedModel) => {
        res.redirect("/filmLogs/")
    })
})

// C // create
// with auth
// router.post("/", auth, async (req,res) => {
//     try {
//         req.body.username = req.session.username
//         const newLog = await FilmLog.create(req.body, (newLog))
//         res.redirect("/filmLogs/")    
//     } catch (error) {
//         console.log(error)
//     }
// })

// router.post("/", auth, (req,res) => {
//     req.body.username = req.session.username
//     console.log(req.body)
//     // if(req.body.rollNumber === true) {
//         FilmLog.create(req.body, (error,data) =>{
//             res.redirect("/filmLogs/")
//         })
//     // }
// })
// without auth
router.post("/", (req,res) => {
    FilmLog.create(req.body, (error, data) => {
        res.redirect("/filmLogs")
    })
})

// E // edit
// with auth
// router.get("/edit/:id", auth, async (req,res) => {
//     try {
//         const filmLog = await FilmLog.findById(req.params.id)
//         res.render("/filmLogs/Edit", {filmLog})
//     } catch (error) {
//         console.log(error)
//     }    
// })
// without auth
router.get("/edit/:id", (req,res) => {
    FilmLog.findById(req.params.id, (error, foundLog) => {
        res.render("filmLogs/Edit", {
            filmLog: foundLog
        })
    })
})

// S // show
// with auth
// router.get("/:id", auth, (req,res) => {
//     FilmLog.findById(req.params.id, (error, foundLog) => {
//         res.render("filmLogs/Show", {
//             filmLog: foundLog
//         })
//     })
// })

// without auth
router.get("/:id", (req,res) => {
    FilmLog.findById(req.params.id, (error, foundLog) => {
        res.render("filmLogs/Show", {
            filmLog: foundLog
        })
    })
})



module.exports = router