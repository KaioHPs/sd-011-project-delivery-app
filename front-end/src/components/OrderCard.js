import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  orderDate,
  deliveryStatus,
  orderId,
  price,
  address,
} from '../dataTestIds/dataSellerOrders';

const padValue = 4;

const OrderCard = ({ order }) => {
  const {
    id, deliveryAddress,
    deliveryNumber, saleDate,
    status, totalPrice,
  } = order;

  const key = 13;
  console.log(key);
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.keyCode === key) {
      return () => navigate(`/seller/orders/${id}`);
    }
  };

  return (
    <div
      className="order-card"
      onClick={ () => navigate(`/seller/orders/${id}`) }
      onKeyDown={ (e) => handleKeyDown(e) }
      role="button"
      tabIndex={ 0 }
    >
      <div className="order-container">
        <span>
          {'Pedido '}
          <span data-testid={ `${orderId}${id}` }>
            {String(id).padStart(padValue, '0')}
          </span>
        </span>
        <br />
        <span data-testid={ `${deliveryStatus}${id}` }>{ status }</span>
        <br />
        <span data-testid={ `${orderDate}${id}` }>{ saleDate }</span>
        <br />
        <span data-testid={ `${price}${id}` }>{ totalPrice }</span>
        <span
          data-testid={ `${address}${id}` }
        >
          { `${deliveryAddress}, ${deliveryNumber}` }
        </span>
        <br />
        <br />

      </div>
    </div>
  );
};

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.string,
    saleDate: PropTypes.string,
    status: PropTypes.string,
    totalPrice: PropTypes.string,
  }).isRequired,
};

export default OrderCard;
