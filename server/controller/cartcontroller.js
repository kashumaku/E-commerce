const cartModel = require("../model/cartmodel")
//Add products to cart
const addToCart = async (req, res) => {
    const cartData = req.body
    const quantity = Number(req.body.quantity)
    const cartM = new cartModel(cartData)
    try {
        const isProductFound = await cartModel.findOne({ productId: req.body.productId, userId: req.body.userId }) ? true : false
        if (isProductFound) {
            const response = await cartModel.findOneAndUpdate({ productId: req.body.productId }, { $inc: { quantity: quantity } })
            res.json({ success: true, operation: "update", ...response._doc })

        } else {
            const response = await cartM.save()
            res.json({ success: true, operation: "create", ...response._doc })
        }
    } catch (err) {
        res.json({ success: false, msg: err.message })
    }
}

//Get Cart products
const getCart = async (req, res) => {
    const userId = req.params.userId
    try {
        const response = await cartModel.find({ userId: userId })
        res.json(response)
    } catch (err) {
        res.json({ success: false, msg: err.message })
    }
}
//Delete cart product
const deleteCartProduct = async (req, res) => {
    const cartId = req.params.id
    try {
        const response = await cartModel.deleteOne({ _id: cartId })
        res.json(response)
    } catch (err) {
        res.json({ success: false, msg: err.message })
    }
}
module.exports = { addToCart, getCart, deleteCartProduct }