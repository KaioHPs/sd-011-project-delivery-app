const { sale } = require('../database/models/index');

const createOrder = async (order) => {
  const { 
    user_id, seller_id, 
    total_price, delivery_address, 
    delivery_number, sale_date,
  } = order;
  
  const orderCreated = sale
    .create({
      userId: user_id,
      sellerId: seller_id,
      totalPrice: total_price,
      deliveryAddress: delivery_address,
      deliveryNumber: delivery_number,
      saleDate: sale_date,
      status: 'pendente',
    });

  return orderCreated;
};

module.exports = {
  createOrder,
};
