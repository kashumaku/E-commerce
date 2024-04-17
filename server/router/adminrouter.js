const getAllProducts = require('../controller/admincontroller');
const { verifyUser, isAdmin } = require('../middleware/verifyuser');

const adminRouter = require('express').Router();
adminRouter.get('/products', verifyUser, isAdmin, getAllProducts)

module.exports = adminRouter