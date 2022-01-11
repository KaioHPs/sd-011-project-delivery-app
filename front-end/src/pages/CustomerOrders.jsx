import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomerNavbar from '../components/CustomerNavbar';
import './CustomerOrders.css';

export default function CustomerOrders() {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState({ name: '', role: '' });

  function formateDate(date) {
    const newDate = new Date(date);
    const day = newDate.getDate();
    const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
    const year = newDate.getFullYear();
    return `${day}/${month}/${year}`;
  }

  function goToOrder(orderId) {
    window.location.href = `/customer/orders/${orderId}`;
  }

  function getTokenByLocalStorage() {
    return JSON.parse(localStorage.getItem('user')).token;
  }

  useEffect(() => {
    const getUserOrders = async () => {
      const order = await axios.post('http://localhost:3001/customer/orders', {
        token: getTokenByLocalStorage(),
      }, {
        headers: {
          authorization: getTokenByLocalStorage(),
        },
      })
        .then((r) => setOrders(r.data));
      return order;
    };
    getUserOrders();

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
  }, []);

  return (
    <div>
      <CustomerNavbar name={ user.name } role={ user.role } focusedPage="orders" />
      {
        orders.map((order) => (
          <div
            role="button"
            key={ order.id }
            onClick={ () => goToOrder(order.id) }
            onKeyDown={ () => goToOrder(order.id) }
            tabIndex={ 0 }
            className="orderCard"
          >
            <h1
              data-testid={ `customer_orders__element-order-id--${order.id}` }
              className="padding"
            >
              { order.id }

            </h1>
            <p
              className="padding"
              data-testid={ `customer_orders__element-delivery-status--${order.id}` }
            >
              { order.status }

            </p>
            <p
              className="padding"
              data-testid={ `customer_orders__element-order-date--${order.id}` }
            >
              { formateDate(order.saleDate) }

            </p>
            <p
              className="padding"
              data-testid={ `customer_orders__element-card-price--${order.id}` }
            >
              { order.totalPrice.toString().replace('.', ',') }

            </p>
          </div>
        ))
      }
    </div>
  );
}
