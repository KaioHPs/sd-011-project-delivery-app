const { user } = require('../database/models');
const { sale } = require('../database/models');

const getCustomerId = async (email) => {
  const customerId = await user.findOne({ where: { email } });
  return customerId.id;
};

const findAllOrdersById = async (email) => { 
  const customerId = await getCustomerId(email);
  const orders = await sale.findAll({ 
    where: { user_id: customerId },
  });
  return orders;
};

module.exports = {
  findAllOrdersById,
};
