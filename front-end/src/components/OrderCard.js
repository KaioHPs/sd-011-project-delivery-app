import React from 'react';
// import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

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

  const orderDate = `seller_orders__element-order-date-${id}`;
  const deliveryStatus = `seller_orders__element-delivery-status-${id}`;
  const orderId = `seller_orders__element-order-id-${id}`;
  const price = `seller_orders__element-card-price-${id}`;
  const address = `seller_orders__element-card-address-${id}`;
  const navigate = useNavigate();

  return (
    <div // eslint-disable-line
      className="order-card"
      // eslint-disable-next-line
      onClick={() => navigate(`/seller/orders/${id}`)}
    >
      <div className="order-container">
        <span data-test-id={ orderId }>{ `Pedido 000${id}` }</span>
        <span data-testid={ deliveryStatus }>{ status }</span>
        <span data-testid={ orderDate }>{ saleDate }</span>
        <span data-testid={ price }>{ totalPrice }</span>
        <span
          data-testid={ address }
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
