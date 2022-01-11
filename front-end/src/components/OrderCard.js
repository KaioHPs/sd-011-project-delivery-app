import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  orderDate,
  deliveryStatus,
  orderId,
  price,
  address,
} from '../dataTestIds';

const OrderCard = ({ order }) => {
  const {
    id, deliveryAddress,
    deliveryNumber, saleDate,
    status, totalPrice,
  } = order;

  const navigate = useNavigate();
  const key = 13;

  const handleKeyDown = (e) => {
    if (e.keyCode === key) {
      return () => navigate(`/seller/orders/${id}`);
    }
  };

  const orderDate = `seller_orders__element-order-date-${id}`;
  const deliveryStatus = `seller_orders__element-delivery-status-${id}`;
  const orderId = `seller_orders__element-order-id-${id}`;
  const price = `seller_orders__element-card-price-${id}`;
  const address = `seller_orders__element-card-address-${id}`;
  const navigate = useNavigate();

  return (
    <div
      className="order-card"
      onClick={ () => navigate(`/seller/orders/${id}`) }
      onKeyDown={ () => handleKeyDown() }
      role="button"
      tabIndex={ 0 }
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

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.number,
    saleDate: PropTypes.string,
    status: PropTypes.string,
    totalPrice: PropTypes.number,
  }).isRequired,
};

export default OrderCard;
