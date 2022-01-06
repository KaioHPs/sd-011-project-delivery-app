const { findAllOrdersById } = require('../services/customerOrdersService');

const ordersList = async (req, res) => {
const { email } = req.body;
const allOrders = await findAllOrdersById(email);
res.status(200).send(allOrders);
};

module.exports = { ordersList };
