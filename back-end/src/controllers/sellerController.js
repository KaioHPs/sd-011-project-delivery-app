const sellerService = require('../services/sellerService');

const getAll = async (_req, res) => {
  try {
    const orders = await sellerService.getAll();
  
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = {
  getAll,
};
