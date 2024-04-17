const { addToCart, getCart, deleteCartProduct } = require('../controller/cartcontroller');

const cartRouter = require('express').Router();

cartRouter.post('/addtocart', addToCart)
cartRouter.get('/getcart/:userId', getCart)
cartRouter.delete('/delete/:id', deleteCartProduct)

module.exports = cartRouter