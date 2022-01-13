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

const preparando = 'Preparando';
const transito = 'Em Trânsito';
const padValue = 4;

const OrderDetails = () => {
  const [order, setOrder] = useState();
  const [user, setUser] = useState({ name: '', role: '' });
  const [actualStatusOrder, setOrderStatus] = useState('');

  const { id } = useParams();

  useEffect(() => {
    const getOrder = async () => {
      const orderDetail = await axios.get(`http://localhost:3001/seller/orders/${id}`)
        .then((o) => o.data);
      setOrder(orderDetail);
      setOrderStatus(orderDetail.status);
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

    setOrderStatus(newStatus);
  };

  if (order) {
    const date = new Date(order.saleDate).toLocaleDateString('pt-br');
    const totalPriceOrder = order.totalPrice.replace(/\./, ',');
    return (
      <div>
        <CustomerNavbar name={ user.name } role={ user.role } focusedPage="orders" />
        <div className="order-container">
          <span>
            {'Pedido '}
            <span data-testid={ `${orderId}` }>
              {String(id).padStart(padValue, '0')}
            </span>
          </span>
          <br />
          <span data-testid={ `${orderDate}` }>
            { date }
          </span>
          <br />
          <span data-testid={ `${deliveryStatus}` }>{ actualStatusOrder }</span>
          <br />
          <button
            data-testid={ `${preparingCheck}` }
            type="button"
            onClick={ () => { updateStatus(preparando); } }
            disabled={ preparingButton(actualStatusOrder) }
          >
            PREPARAR PEDIDO
          </button>
          <button
            data-testid={ `${dispatchCheck}` }
            type="button"
            onClick={ () => { updateStatus(transito); } }
            disabled={ dispatchButton(actualStatusOrder) }

          >
            SAIU PARA ENTREGA
          </button>
          <br />
          <span>
            { 'Total: ' }
            <span
              data-testid={ `${totalPrice}` }
            >
              { totalPriceOrder }
            </span>
          </span>
        </div>
      </div>
    );
  } return (
    <div>Carregando pedido...</div>
  );
};

export default OrderDetails;
