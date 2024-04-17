const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    userId: {
        type: String,
    },
    productId: {
        type: String,
    },
    productName: {
        type: String,
        default: 0
    },
    thumbnail: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },

}, { timestamps: true })

const cartModel = mongoose.model('cart', cartSchema);
module.exports = cartModel