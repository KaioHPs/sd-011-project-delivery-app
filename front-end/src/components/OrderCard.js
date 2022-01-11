import React from 'react';
// import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  orderDate,
  deliveryStatus,
  orderId,
  price,
  address,
} from '../dataTestIds';

// eslint-disable-next-line
const OrderCard = ({ order }) => {
  // eslint-disable-next-line
  const {
    // eslint-disable-next-line
    id,deliveryAddress,
    // eslint-disable-next-line
    deliveryNumber, saleDate,
    // eslint-disable-next-line
    sellerId, status,
    // eslint-disable-next-line
    totalPrice, userId
  } = order;
  const navigate = useNavigate();

  return (
    <div // eslint-disable-line
      className="order-card"
      // eslint-disable-next-line
      onClick={() => navigate(`/seller/orders/${id}`)}
    >
      <div className="order-container">
        <span data-test-id={ `${orderId}${id}` }>{ `Pedido 000${id}` }</span>
        <span data-testid={ `${deliveryStatus}${id}` }>{ status }</span>
        <span data-testid={ `${orderDate}${id}` }>{ saleDate }</span>
        <span data-testid={ `${price}${id}` }>{ totalPrice }</span>
        <span
          data-testid={ `${address}${id}` }
        >
          { `${deliveryAddress}, ${deliveryNumber}` }
        </span>
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
