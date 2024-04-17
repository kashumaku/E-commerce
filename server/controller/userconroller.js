const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userModel = require('../model/usermodel')

//Register user
const signUp = async (req, res) => {
    const profile = req.file
    const { password, ...user } = req.body
    const passwordHash = bcrypt.hashSync(password, 10)
    const userData = { ...user, password: passwordHash }
    const userM = new userModel(userData)
    try {
        const response = await userM.save();
        res.json({ success: true, data: response })
    } catch (err) {
        res.json({ success: false, message: err.message })
    }
}
//Login
const logIn = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await userModel.findOne({ email: email })
        if (user) {
            const dbPassword = user.password
            const isPassword = bcrypt.compareSync(password, dbPassword)
            if (isPassword) {
                const { password, isAdmin, ...others } = user._doc
                const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin, name: user.firstName + " " + user.lastName, profile: user.profile }, process.env.JWT, { expiresIn: "1h" })
                res.json({ success: true, data: { ...others, access_token: token } })
            } else res.json({ success: false, data: null, message: "Wrong password" })
        }
        else
            res.json({ success: false, message: "user not found" })
    } catch (err) {
        res.json({ success: false, message: err.message })

    }

}
//Get all users
const getUsers = async (req, res) => {
    try {
        const response = await userModel.find({})
        res.json({ success: true, data: response })
    } catch (err) {
        res.json({ success: false, message: err.message })
    }
}

//Get user role
const getRole = (req, res) => {
    const user = req.user
    user.isAdmin ? res.json({ role: "admin", user }) : res.json({ role: "user", user })
}
module.exports = { signUp, logIn, getUsers, getRole }