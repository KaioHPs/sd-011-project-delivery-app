import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  orderId,
  orderDate,
  deliveryStatus,
  preparingCheck,
  dispatchCheck,
  totalPrice,
} from '../dataTestIds/dataOrderDetails';

const OrderDetails = () => {
  const [order, setOrder] = useState();
  const [orderReceived, setNewOrder] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getOrder = async () => {
      const orderDetail = await axios.get(`http://localhost:3001/seller/orders/${id}`)
        .then((o) => o.data);
      setOrder(orderDetail);
    };

    getOrder();
  }, [id]);

  if (order) {
    const date = new Date(order.saleDate).toLocaleDateString();
    return (
      <div>
        <div className="order-container">
          <span data-test-id={ `${orderId}${id}` }>{ `PEDIDO 000${order.id}` }</span>
          <br />
          <span data-testid={ `${orderDate}${id}` }>
            { date }
          </span>
          <br />
          <span data-testid={ `${deliveryStatus}${id}` }>{ order.status }</span>
          <br />
          <button
            data-testid={ `${preparingCheck}${id}` }
            type="button"
          >
            PREPARAR PEDIDO
          </button>
          <button
            data-testid={ `${dispatchCheck}${id}` }
            type="button"
          >
            SAIU PARA ENTREGA
          </button>
          <br />
          <span
            data-testid={ `${totalPrice}${id}` }
          >
            { `Total: ${order.totalPrice}` }
          </span>
        </div>
      </div>
    );
  } return (
    <div>Carregando pedido...</div>
  );
};

export default OrderDetails;
