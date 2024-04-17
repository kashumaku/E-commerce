const jwt = require("jsonwebtoken")

const verifyUser = async (req, res, next) => {

    const token = req.headers.authorization
    try {
        const user = await jwt.verify(token, process.env.JWT)
        req.user = user
        next()
    } catch (err) {
        res.json(err)
    }
}
const isAdmin = (req, res, next) => {
    const isAdmin = req.user.isAdmin ? true : false
    if (isAdmin) next()
    else res.json({ success: false, message: "You are not authorized" })
}
module.exports = { verifyUser, isAdmin }