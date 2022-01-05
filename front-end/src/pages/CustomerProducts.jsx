import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import CustomerNavbar from '../components/CustomerNavbar';

const CustomerProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedProds, setSelectedProds] = useState({});
  const [totalValue, settotalValue] = useState(0);

  useEffect(() => {
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
      return t + (prodPrice * prod.quantity);
    }, 0);
    settotalValue(finalVal);
    window.localStorage.setItem('deliveryAppCart', JSON.stringify(selectedProds));
  }, [selectedProds]);

  return (
    <div>
      <CustomerNavbar />
      <div className="card-container flex wrap">
        { products.map((p) => (<ProductCard
          key={ `${p.id} - ${p.name}` }
          product={ p }
          totalProds={ selectedProds }
          setValFunc={ setSelectedProds }
        />)) }
      </div>
      {totalValue > 0 ? (
        <div>
          Ver Carrinho R$
          <span data-testid="customer_products__checkout-bottom-value">
            {totalValue.toFixed(2)}
          </span>
        </div>) : ''}
    </div>
  );
};

export default CustomerProducts;
