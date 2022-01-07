import { Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import './App.css';
import Login from './pages/login';
import Register from './pages/register';
import CustomerProducts from './pages/CustomerProducts';
import SellerOrders from './pages/SellerOrders';
import OrderDetails from './pages/OrderDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route
        path="/customer/products"
        element={ <CustomerProducts /> }
      />
      <Route
        path="/seller/orders"
        element={ <SellerOrders /> }
      />
      <Route
        path="/seller/orders/:id"
        element={ <OrderDetails /> }
      />
    </Routes>
  );
}

export default App;
