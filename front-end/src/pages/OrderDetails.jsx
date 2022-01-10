import React, { useState, useEffect, componentDidMount } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import {
//   orderDate,
//   deliveryStatus,
//   orderId,
//   price,
//   address,
// } from '../dataTestIds';

const OrderDetails = () => {
  const [order, setOrder] = useState();
  const [orderReceived, setNewOrder] = useState();
  const { id } = useParams();

  console.log(order);
  console.log('orderReceived', orderReceived);

  useEffect(() => {
    const getOrder = async () => {
      const orderDetail = await axios.get(`http://localhost:3001/seller/orders/${id}`)
        .then((o) => o.data);
      setOrder(orderDetail);
    };

    getOrder();
  }, []);

  componentDidMount(() => {
    setNewOrder(order);
  });

  return (
    <div>
      <p>algo</p>
      {/* <div className="order-container">
        <span data-test-id={ `${orderId}${id}` }>{ `Pedido 000${order.id}` }</span>
        <span data-testid={ `${deliveryStatus}${id}` }>{ order.status }</span>
        <span data-testid={ `${orderDate}${id}` }>{ order.sale_date }</span>
        <span data-testid={ `${price}${id}` }>{ order.total_price }</span>
        <span
          data-testid={ `${address}${id}` }
        >
          { `${order.delivery_address}, ${order.delivery_number}` }
        </span>
      </div> */}

    </div>
  );
};

export default OrderDetails;
