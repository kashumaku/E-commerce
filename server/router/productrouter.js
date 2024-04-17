const { getAllProducts, addProduct, getProductDetail, getSpecialProducts, getSimilar } = require('../controller/productcontroller');
const upload = require('../middleware/multer');

const productRouter = require('express').Router();

productRouter.get('/getproduct', getAllProducts)
productRouter.post('/addproduct', upload.single("file"), addProduct)
productRouter.get('/detail/:id', getProductDetail)
productRouter.get('/special', getSpecialProducts)
productRouter.get('/similar/:category', getSimilar)

module.exports = productRouter