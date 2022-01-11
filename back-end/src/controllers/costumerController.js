const costumerService = require('../services/costumerService');

const createOrder = async (req, res) => {
  try {
    const newOrder = await costumerService.createOrder(req.body);

    return res.status(200).json(newOrder);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const orderUpdated = await costumerService.updateOrder(id, status);
    
    return res.status(200).json(orderUpdated);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

module.exports = {
  createOrder,
  editOrder,
  updateOrder,
};
