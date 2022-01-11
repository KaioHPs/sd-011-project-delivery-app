const { sale, salesProduct } = require('../database/models');

const createSale = async ({ uId, sId, price, address, addressNum, t }) => {
  const { dataValues } = await sale.create({ 
    userId: uId,
    sellerId: sId,
    totalPrice: price,
    deliveryAddress: address,
    deliveryNumber: addressNum,
    status: 'Pendente',
  }, { transaction: t });

  return dataValues;
};

const createSaleProduct = async ({ product, currSale, t }) => {
  const { dataValues } = await salesProduct.create({ 
    saleId: currSale.id,
    productId: product.id,
    quantity: product.quantity,
  }, { transaction: t });

  return dataValues;
};

module.exports = {
  createSale,
  createSaleProduct,
};
