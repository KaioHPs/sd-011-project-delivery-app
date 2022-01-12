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
  const { id } = useParams();
  const entregue = 'ENTREGUE';
  const preparando = 'PREPARANDO';
  const transito = 'EM TRANSITO';
  const pendente = 'PENDENTE';

  useEffect(() => {
    const getOrder = async () => {
      const orderDetail = await axios.get(`http://localhost:3001/seller/orders/${id}`)
        .then((o) => o.data);
      setOrder(orderDetail);
    };

    getOrder();
  }, [id]);

  const updateStatus = async (newStatus) => {
    const statusUpdated = await axios.put(`http://localhost:3001/seller/orders/${id}`, { status: newStatus })
      .then((o) => o.data);

    console.log(statusUpdated);

    window.location.reload();
  };

  const preparingButton = () => {
    const actualStatus = order.status;
    if (actualStatus === preparando) return true;
    if (actualStatus === entregue) return true;
    if (actualStatus === transito) return true;

    return false;
  };

  const dispatchButton = () => {
    const actualStatus = order.status;
    if (actualStatus === pendente) return true;
    if (actualStatus === transito) return true;
    if (actualStatus === entregue) return true;

    return false;
  };

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
            onClick={ () => { updateStatus(preparando); } }
            disabled={ preparingButton() }
          >
            PREPARAR PEDIDO
          </button>
          <button
            data-testid={ `${dispatchCheck}${id}` }
            type="button"
            onClick={ () => { updateStatus(transito); } }
            disabled={ dispatchButton() }

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
