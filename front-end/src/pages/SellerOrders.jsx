import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderCard from '../components/OrderCard';
import CustomerNavbar from '../components/CustomerNavbar';

const SellerOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState({ name: '', role: '' });

  useEffect(() => {
    const getOrders = async () => {
      const allOrders = await axios.get('http://localhost:3001/seller/orders')
        .then((o) => o.data);
      setOrders(allOrders);
    };

    getOrders();

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
      <div>
        { orders.map((order) => (
          <OrderCard
            key={ order.id }
            order={ order }
          />
        )) }
      </div>
    </div>
  );
};

export default SellerOrders;
