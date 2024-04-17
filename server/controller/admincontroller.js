const productModel = require("../model/productmodel")

//Get all products
const getAllProducts = async (req, res) => {
    try {
        const response = await productModel.find({})
        res.json({ success: true, data: response })
    } catch (err) {
        res.json({ success: false, data: null, message: err.message })

    }
}
module.exports = getAllProducts