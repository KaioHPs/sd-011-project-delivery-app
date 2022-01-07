const { sale, salesProduct } = require('../database/models');

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

const createSaleProduct = async ({ product, sale, t }) => {
  const { dataValues } = await salesProduct.create({ 
    sale_id: sale.id,
    product_id: product.id,
    quantity: product.quantity,
  }, { transaction: t });

  return dataValues;
};

module.exports = {
  createSale,
  createSaleProduct,
};
