const Product = require("../../models/product");

const get = (req, res) => {
  res.render("admin/create");
};

const post = async (req, res) => {
  const newProduct = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    rating: req.body.rating,
    image: req.body.image
  };

  const product = await new Product(newProduct).save();
  console.log("New Product: ", product);
  res.redirect("/admin");
};

module.exports = {
  get: get,
  post: post
};
