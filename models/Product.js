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
    description: {
        type: String,
        
    },
    image: {
        type: String,
        required: true
    }
    
        // fileName: String,
        // fileType: String
               

    
});


const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;