const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
    
    products: {
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    image: {
        type:
        {
            data: Buffer,
            contentType: String
    },
        required: true
    }
    
});


const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;