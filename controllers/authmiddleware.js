// auth middleware
const auth = (req, res, next) => {
    if (req.session.login) {
        next()
    } else {
        res.render("auth/Login")
        // res.status(400).send("NOT LOGGED IN")
    }
}

module.exports = auth