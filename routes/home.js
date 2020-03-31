const Product = require('../models/product');

const home = async (req, res) => {
    const products = await Product.find().exec();
    res.render('home', { products })
}

module.exports = home;