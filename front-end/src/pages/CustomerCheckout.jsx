import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomerNavbar from '../components/CustomerNavbar';

const CustomerCheckout = () => {
  const [selectedProds, setSelectedProds] = useState({});
  const [userName, setUserName] = useState('');
  const [totalValue, settotalValue] = useState(0);

  useEffect(() => {
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

    const cart = JSON.parse(window.localStorage.getItem('deliveryAppCart'));
    if (cart) {
      setSelectedProds(cart);
    }
  }, []);

  useEffect(() => {
    console.log(selectedProds);
    const finalVal = Object.values(selectedProds).reduce((t, prod) => {
      const prodPrice = parseFloat(prod.price);
      return t + (parseFloat((prodPrice * prod.quantity).toFixed(2)));
    }, 0);
    settotalValue(finalVal);
    window.localStorage.setItem('deliveryAppCart', JSON.stringify(selectedProds));
  }, [selectedProds]);

  return (
    <div>
      <CustomerNavbar name={ userName } />
      <div>
        Finalizar Pedido
        { Object.values(selectedProds).map((p, i) => (
          <div
            key={ `${i} - ${p.name}` }
          >
            { p.name }
          </div>
        )) }
        { totalValue }
      </div>
    </div>
  );
};

export default CustomerCheckout;
