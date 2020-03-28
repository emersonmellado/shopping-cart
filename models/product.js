const mongoose = require('mongoose');

//Mongoose Model (Work as a Schema)
const Product = mongoose.model('Product', {
    name: String,
    description: String,
    price: Number,
    rating: Number,
    image: String
});

module.exports = Product;