import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CustomerNavbar from '../components/CustomerNavbar';
import OrderDetailsTable from '../components/OrderDetailsTable';

const padValue = 4;
const dataOrder = 'customer_order_details__element-order-details-label-order-id';
const dataSeller = 'customer_order_details__element-order-details-label-seller-name';
const dataDate = 'customer_order_details__element-order-details-label-order-date';
const dataStatus = 'customer_order_details__element-order-details-label-delivery-status';

const CustomerOrderDetails = () => {
  const [user, setUser] = useState({ name: '', role: '' });
  const [order, setOrder] = useState({});
  // const [totalValue, settotalValue] = useState(0);

  useEffect(() => {
    const { orderId } = useParams();

    const validateToken = async (token) => {
      const isValid = await axios.post('http://localhost:3001/token', { token })
        .then((r) => r.data.tokenIsValid);
      return isValid;
    };

    const getUser = async () => {
      const loggedUser = JSON.parse(window.localStorage.getItem('user'));
      if (loggedUser && loggedUser.token && await validateToken(loggedUser.token)) {
        setUser(loggedUser);
      } else {
        window.location.href = '/login';
      }
    };
    getUser();

    const getOrder = async () => {
      const currOrder = await axios.get(`http://localhost:3001/sales/details/${orderId}`);
      console.log(currOrder.data.sale);
      setOrder(currOrder.data.sale);
    };
    getOrder();
  }, []);

  return (
    <div>
      <CustomerNavbar name={ user.name } role={ user.role } focusedPage="orders" />
      {order.id ? (
        <div className="details-container flex">
          <span>
            {'Pedido '}
            <span data-testid={ dataOrder }>
              {String(order.id).padStart(padValue, '0')}
            </span>
            ;
          </span>
          <span>
            P. Vend:
            <span data-testid={ dataSeller }>
              {` ${order.seller.name}`}
            </span>
          </span>
          <span data-testid={ dataDate }>
            {new Date(order.saleDate).toLocaleDateString('pt-br')}
          </span>
          <span data-testid={ dataStatus }>
            {order.status}
          </span>
          <button
            disabled={ order.status !== 'Em Trânsito' }
            type="button"
            className="bg-green-1 tc-white delivery-btn"
            data-testid="customer_order_details__button-delivery-check"
          >
            MARCAR COMO ENTREGUE
          </button>
        </div>
      ) : ''}
      {order.id ? (
        <div className="details-container flex-column">
          <OrderDetailsTable products={ order.products } />
          <p className="bg-green-1 tc-white cart-total text-center">
            {'Total: R$ '}
            <span data-testid="customer_order_details__element-order-total-price">
              {order.totalPrice.replace(/\./, ',')}
            </span>
          </p>
        </div>
      ) : ''}
    </div>
  );
};

export default CustomerOrderDetails;
