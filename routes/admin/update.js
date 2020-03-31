const Product = require('../../models/product');

const adminUpdate = async (req, res) => {
    const idToUpdate = req.params.id;
    const product = await Product.findById(idToUpdate).exec();
    res.render('admin/update', { product })
}

module.exports = adminUpdate;