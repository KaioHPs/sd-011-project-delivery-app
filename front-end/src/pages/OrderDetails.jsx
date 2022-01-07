import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const OrderDetails = () => {
  const [order, setOrder] = useState();
  const { id } = useParams();
  console.log(order);

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
      <p>PENINSINSINSINSFOIANSFOINAF</p>
    </div>
  );
};

export default OrderDetails;
