import React from 'react';
import PropTypes from 'prop-types';
import './CustomerNavbar.css';

const CustomerNavbar = ({ name }) => {
  const logOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('deliveryAppCart');
    window.location.href = '/login';
  };

  return (
    <div className="navbar flex bg-green-1 tc-white pt-1">
      <div className="fg-2 text-center bg-green-2">
        <span
          className="navbar-text"
          data-testid="customer_products__element-navbar-link-products"
        >
          Produtos
        </span>
      </div>
      <div className="fg-2 text-center">
        <span
          className="navbar-text"
          data-testid="customer_products__element-navbar-link-orders"
        >
          Pedidos
        </span>
      </div>
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
