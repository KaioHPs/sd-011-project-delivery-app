import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  orderDate,
  deliveryStatus,
  orderId,
  price,
  address,
} from '../dataTestIds';

const OrderDetails = () => {
  const [order, setOrder] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getOrder = async () => {
      const orderDetail = await axios.get(`http://localhost:3001/seller/orders/${id}`)
        .then((o) => o.data);
      setOrder(orderDetail);
    };

    getOrder();
  }, []);

  return (
    <div>
      {
        order
          ? <div className="order-container">
            <span data-test-id={ `${orderId}${id}` }>{ `Pedido 000${order.id}` }</span>
            <span data-testid={ `${deliveryStatus}${id}` }>{ order.status }</span>
            <span data-testid={ `${orderDate}${id}` }>{ order.saleDate }</span>
            <span data-testid={ `${price}${id}` }>{ order.totalPrice }</span>
            <span
              data-testid={ `${address}${id}` }
            >
              { `${order.deliveryAddress}, ${order.deliveryNumber}` }
            </span>
            {/* eslint-disable-next-line */}
          </div> : null
      }
    </div>
  );
};

export default OrderDetails;
