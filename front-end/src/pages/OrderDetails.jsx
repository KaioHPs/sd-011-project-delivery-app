import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CustomerNavbar from '../components/CustomerNavbar';
import { preparingButton, dispatchButton } from '../helpers/buttonsHelper';
import {
  orderId,
  orderDate,
  deliveryStatus,
  preparingCheck,
  dispatchCheck,
  totalPrice,
} from '../dataTestIds/dataOrderDetails';

const preparando = 'PREPARANDO';
const transito = 'EM TRANSITO';

const OrderDetails = () => {
  const [order, setOrder] = useState();
  const [user, setUser] = useState({ name: '', role: '' });
  const { id } = useParams();

  useEffect(() => {
    const getOrder = async () => {
      const orderDetail = await axios.get(`http://localhost:3001/seller/orders/${id}`)
        .then((o) => o.data);
      setOrder(orderDetail);
    };

    getOrder();

    const validateToken = async (token) => {
      const isValid = await axios.post('http://localhost:3001/token', { token })
        .then((r) => r.data.tokenIsValid);
      return isValid;
    };

    const getUser = async () => {
      const loggedUser = JSON.parse(window.localStorage.getItem('user'));
      if (loggedUser && loggedUser.token && await validateToken(loggedUser.token)) {
        setUser(loggedUser);
      }
    };

    getUser();
  }, [id]);

  const updateStatus = async (newStatus) => {
    const statusUpdated = await axios.put(`http://localhost:3001/seller/orders/${id}`, { status: newStatus })
      .then((o) => o.data);

    console.log(statusUpdated);

    window.location.reload();
  };

  if (order) {
    const date = new Date(order.saleDate).toLocaleDateString();
    const actualStatus = order.status;
    return (
      <div>
        <CustomerNavbar name={ user.name } role={ user.role } focusedPage="orders" />
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
            disabled={ preparingButton(actualStatus) }
          >
            PREPARAR PEDIDO
          </button>
          <button
            data-testid={ `${dispatchCheck}${id}` }
            type="button"
            onClick={ () => { updateStatus(transito); } }
            disabled={ dispatchButton(actualStatus) }

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
