import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import CustomerNavbar from '../components/CustomerNavbar';

const CustomerProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedProds, setSelectedProds] = useState({});
  const [user, setUser] = useState({ name: '', role: '' });
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
        setUser(loggedUser);
      } else {
        window.location.href = '/login';
      }
    };
    getUser();

    const getProds = async () => {
      const prods = await axios.get('http://localhost:3001/customer/products')
        .then((r) => r.data);
      setProducts(prods);
    };
    getProds();

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

  const toCart = (e) => {
    e.preventDefault();
    window.location.href = '/customer/checkout';
  };

  return (
    <div>
      <CustomerNavbar name={ user.name } role={ user.role } focusedPage="products" />
      <div className="card-container flex wrap">
        { products.map((p) => (<ProductCard
          key={ `${p.id} - ${p.name}` }
          product={ p }
          totalProds={ selectedProds }
          setValFunc={ setSelectedProds }
        />)) }
      </div>
      <button
        disabled={ totalValue <= 0 }
        type="button"
        className="bg-green-1 tc-white cart-btn"
        onClick={ toCart }
        data-testid="customer_products__button-cart"
      >
        {'Ver Carrinho R$ '}
        <span data-testid="customer_products__checkout-bottom-value">
          {totalValue.toFixed(2).replace(/\./, ',')}
        </span>
      </button>
    </div>
  );
};

export default CustomerProducts;
