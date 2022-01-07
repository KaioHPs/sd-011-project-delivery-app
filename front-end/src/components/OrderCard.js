import React from 'react';
// import PropTypes from 'prop-types';

// eslint-disable-next-line
const OrderCard = ({ order }) => {
  // eslint-disable-next-line
  const {
    // eslint-disable-next-line
    id, delivery_address: deliveryAddress,
    // eslint-disable-next-line
    delivery_number: deliveryNumber, sale_date: saleDate,
    // eslint-disable-next-line
    seller_id: sellerId, status,
    // eslint-disable-next-line
    total_price: totalPrice, user_id
  } = order;

  return (
    <div className="order-card">
      <div className="order-container">
        <span>{ `Pedido 000${id}` }</span>
        <span>{ status }</span>
        <span>{ saleDate }</span>
        <span>{ totalPrice }</span>
        <span>{ `${deliveryAddress}, ${deliveryNumber}` }</span>
      </div>
    </div>
  );
};

// OrderCard.PropTypes = {
//   order: PropTypes.shape({
//     id: PropTypes.number,

//   })
// }

export default OrderCard;
