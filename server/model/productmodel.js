const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        default: 0
    },
    featured: {
        type: Boolean,
        default: false
    },
    special: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const productModel = mongoose.model('Product', productSchema);
module.exports = productModel