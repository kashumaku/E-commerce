const productModel = require("../model/productmodel")
//Add product
const addProduct = async (req, res) => {
    const imageFile = req.file
    const product = req.body;
    const productM = new productModel({ ...product, thumbnail: `http://localhost:5001/products/${imageFile.filename}` })
    try {
        const response = await productM.save()
        res.json({ success: true, ...response._doc })
    } catch (err) {
        res.json({ success: false, msg: err.message });
    }
}
//Get all products
const getAllProducts = async (req, res) => {
    try {
        const response = await productModel.find({})
        res.json({ success: true, data: response })
    } catch (err) {
        res.json({ success: false, message: err.message })
    }
}
//Get Product detail
const getProductDetail = async (req, res) => {
    const productid = req.params.id

    try {
        const response = await productModel.findOne({ _id: productid })
        res.json(response._doc)
    }
    catch (err) {
        res.json({ success: false, msg: err.message })
    }
}
//Get special product
const getSpecialProducts = async (req, res) => {
    try {
        const response = await productModel.find({ special: true })
        res.json(response)
    } catch (err) {
        res.json({ success: false, msg: err.message })
    }
}
//Get similar products
const getSimilar = async (req, res) => {
    const category = req.params.category
    try {
        const response = await productModel.find({ category: category })
        res.json(response)
    } catch (err) {
        res.json({ success: false, msg: err.message });
    }

}
module.exports = { getAllProducts, addProduct, getProductDetail, getSpecialProducts, getSimilar }