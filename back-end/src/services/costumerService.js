const { sale } = require('../database/models/index');

const createOrder = async (order) => {
  const { 
    user_id: userId, seller_id: sellerId, 
    total_price: totalPrice, delivery_address: deliveryAddress, 
    delivery_number: deliveryNumber, sale_date: saleDate,
  } = order;
  
  const orderCreated = sale
    .create({
      userId,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      saleDate,
      status: 'PENDENTE',
    });

  return orderCreated;
};

module.exports = {
  createOrder,
};
