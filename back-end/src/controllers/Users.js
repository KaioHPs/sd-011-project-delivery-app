const Users = require('../services/Users');

const getAllSellers = async (_req, res, _next) => {
  const sellers = await Users.getAllSellers();

  return res.status(200).json(sellers);
};

module.exports = {
  getAllSellers,
};