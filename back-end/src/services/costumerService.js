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

const updateOrder = async (id, status) => {
  const newStatus = await sale
    .update(
      { status },
      { where: { id } },
      )
    .then(() => sale.findByPk(id));

  return newStatus;
};

module.exports = {
  createOrder,
  updateOrder,
};
