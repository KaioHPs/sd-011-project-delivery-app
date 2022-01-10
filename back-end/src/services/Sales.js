const { sale, salesProduct } = require('../database/models');

/* eslint-disable camelcase */

const createSale = async ({ uId, sId, price, address, addressNum, t }) => {
  const { dataValues } = await sale.create({ 
    user_id: uId,
    seller_id: sId,
    total_price: price,
    delivery_address: address,
    delivery_number: addressNum,
    status: 'Pendente',
  }, { transaction: t });

  return dataValues;
};

const createSaleProduct = async ({ product, currSale, t }) => {
  const { dataValues } = await salesProduct.create({ 
    sale_id: currSale.id,
    product_id: product.id,
    quantity: product.quantity,
  }, { transaction: t });

  return dataValues;
};

module.exports = {
  createSale,
  createSaleProduct,
};
