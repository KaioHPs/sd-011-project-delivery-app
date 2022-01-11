const { findAllOrdersById } = require('../services/customerOrdersService');

const ordersList = async (req, res) => {
const { token } = req.body;
const allOrders = await findAllOrdersById(token);
res.status(200).send(allOrders);
};

module.exports = { ordersList };
