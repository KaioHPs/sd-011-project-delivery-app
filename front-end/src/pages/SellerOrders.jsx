import React, { useState, useEffect } from 'react';
// eslint-disable-next-line
import axios from 'axios';
import OrderCard from '../components/OrderCard';
import CustomerNavbar from '../components/CustomerNavbar';

const SellerOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const allOrders = await axios.get('http://localhost:3001/seller/orders')
        .then((o) => o.data);
      setOrders(allOrders);
    };

    getOrders();
  }, []);

  return (
    <div>
      <CustomerNavbar />
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
