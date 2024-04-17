const { signUp, getUsers, logIn, getRole } = require('../controller/userconroller');
const { verifyUser, isAdmin } = require('../middleware/verifyuser');

const userRouter = require('express').Router();

userRouter.post('/signup', signUp)
userRouter.post('/login', logIn)
userRouter.get('/getusers', verifyUser, isAdmin, getUsers) //shuld be admin user
userRouter.get('/checkrole', verifyUser, getRole)

module.exports = userRouter