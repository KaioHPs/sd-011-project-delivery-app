import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomerNavbar from '../components/CustomerNavbar';
import './CustomerOrders.css';

export default function CustomerOrders() {
  const [orders, setOrders] = useState([]);
  const [userName, setUserName] = useState('');

  function getUserEmailByLocalStorage() {
    return JSON.parse(localStorage.getItem('user')).email;
  }

  useEffect(() => {
    const getUserOrders = async () => {
      const order = await axios.post('http://localhost:3001/customer/orders', {
        email: getUserEmailByLocalStorage(),
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
        setUserName(loggedUser.name);
      } else {
        window.location.href = '/login';
      }
    };
    getUser();
  }, []);

  return (
    <div>
      <CustomerNavbar name={ userName } />
      {console.log(orders)}
      {
        orders.map((order) => (
          <div className="orderCard" key={ order.id }>
            <h2
              className="padding"
              data-testid={ `customer_orders__element-order-id-${order.id}` }
            >
              { order.id }

            </h2>
            <p
              className="padding"
              data-testid={ `customer_orders__element-order-date-${order.id}` }
            >
              { order.sale_date }

            </p>
            <p
              className="padding"
              data-testid={ `customer_orders__element-delivery-status-${order.id}` }
            >
              { order.status }

            </p>
            <p
              className="padding"
            >
              { order.total_price }

            </p>
          </div>
        ))
      }
    </div>
  );
}
