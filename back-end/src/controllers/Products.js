const Products = require('../services/Products');

const getAllProducts = async (_req, res, _next) => {
  const products = await Products.getAllProducts();

  return res.status(200).json(products);
};

module.exports = {
  getAllProducts,
};
