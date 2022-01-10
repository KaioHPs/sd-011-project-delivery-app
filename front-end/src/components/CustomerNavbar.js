import React from 'react';
import PropTypes from 'prop-types';
import './CustomerNavbar.css';

const CustomerNavbar = ({ name }) => {
  const logOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('deliveryAppCart');
    window.location.href = '/login';
  };

  const toOrder = (e) => {
    e.preventDefault();
    window.location.href = '/customer/orders';
  };

  const toProducts = (e) => {
    e.preventDefault();
    window.location.href = '/customer/products';
  };

  return (
    <div className="navbar flex bg-green-1 tc-white pt-1">
      <div className="fg-2 text-center bg-green-2">
        <button
          type="button"
          onClick={ toProducts }
          className="navbar-btn fg-1 text-center bg-blue-1 tc-white"
          data-testid="customer_products__element-navbar-link-products"
        >
          Produtos
        </button>
      </div>
      <button
        className="navbar-btn fg-1 text-center bg-blue-1 tc-white"
        type="button"
        onClick={ toOrder }
      >
        <span
          className="navbar-text"
          data-testid="customer_products__element-navbar-link-orders"
        >
          { name === 'Tryber Admin' ? 'Gerenciar Usuários' : 'Pedidos'}
        </span>
      </button>
      <div className="fg-4 fs-1 text-center" />
      <div className="fg-2 text-center bg-purple-1">
        <span
          className="navbar-text"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { name }
        </span>
      </div>
      <button
        type="button"
        className="navbar-btn fg-1 text-center bg-blue-1 tc-white"
        onClick={ logOut }
        onKeyPress={ logOut }
      >
        <span
          data-testid="customer_products__element-navbar-link-logout"
        >
          Sair
        </span>
      </button>
    </div>
  );
};

CustomerNavbar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CustomerNavbar;
