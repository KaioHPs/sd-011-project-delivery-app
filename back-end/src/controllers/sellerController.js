const sellerService = require('../services/sellerService');

const getAll = async (_req, res) => {
  try {
    const orders = await sellerService.getAll();
  
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await sellerService.getById(id);

    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAll,
  getById,
};
