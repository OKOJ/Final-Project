const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductSchema = new Schema({

    product: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
   _userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    
});


const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;