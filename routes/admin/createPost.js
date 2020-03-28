const mongoose = require('mongoose');
const Product = require('../../models/product');
let uri = "mongodb://shoppingcart:shoppingcart1234@cluster0-shard-00-00-tuwa5.mongodb.net:27017,cluster0-shard-00-01-tuwa5.mongodb.net:27017,cluster0-shard-00-02-tuwa5.mongodb.net:27017/shoppingcart?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const adminCreate = async (req, res) => {
    const newProduct = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        rating: req.body.rating,
        image: req.body.image
    }

    const product = await new Product(newProduct).save()
    console.log("New Product: ", product)
    res.redirect('/admin');
}

module.exports = adminCreate;