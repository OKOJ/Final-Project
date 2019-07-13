const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    // },
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
        type: String,
        required: true
    }
    // createdAt: {
    //     type: Date,
    //     default: Date.now
    // }
    
//    _userId: {
//         type: Schema.Types.ObjectId,
//         ref: 'User'
//       }
    
});


const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;