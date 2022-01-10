const { user } = require('../database/models');
const { sale } = require('../database/models');
const { tokenJwtDecoded } = require('../utils/tokenDecoder');

/* eslint-disable camelcase */

const getCustomerId = async (email) => {
  const customerId = await user.findOne({ where: { email } });
  return customerId.id;
};

const findAllOrdersById = async (token) => { 
  const { email } = tokenJwtDecoded(token);
  const customerId = await getCustomerId(email);
  const orders = await sale.findAll({ 
    where: { user_id: customerId },
  });
  return orders;
};

module.exports = {
  findAllOrdersById,
};
