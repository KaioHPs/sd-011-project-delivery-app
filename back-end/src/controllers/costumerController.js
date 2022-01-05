const costumerService = require('../services/costumerService');

const createOrder = async (req, res) => {
  try {
    console.log(req.body);
    const newOrder = await costumerService.createOrder(req.body);

    return res.status(200).json(newOrder);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = {
  createOrder,
};
