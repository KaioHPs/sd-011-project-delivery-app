import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderCard from '../components/OrderCard';

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
