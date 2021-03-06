const Product = require("../../models/product");

const get = async (req, res) => {
  const idToUpdate = req.params.id;
  const product = await Product.findById(idToUpdate).exec();
  res.render("admin/update", { product });
};

const post = async (req, res) => {
  const idToUpdate = req.body.id;

  const updateProduct = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    rating: req.body.rating,
    image: req.body.image
  };

  let filter = { _id: idToUpdate };

  let result = await Product.updateOne(filter, updateProduct).exec();
  console.log("Result: ", result);

  res.redirect("/admin");
};

module.exports = { get, post };
