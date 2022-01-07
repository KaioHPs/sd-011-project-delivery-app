import { Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import './App.css';
import Login from './pages/login';
import Register from './pages/register';
import CustomerProducts from './pages/CustomerProducts';
import CustomerOrders from './pages/CustomerOrders';
import Admin from './pages/Admin';
import CustomerCheckout from './pages/CustomerCheckout';
import CustomerOrderDetails from './pages/CustomerOrderDetails';
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
      <Route path="/customer/orders" element={ <CustomerOrders /> } />
      <Route path="/customer/orders/:orderId" element={ <CustomerOrderDetails /> } />
      <Route path="/customer/checkout" element={ <CustomerCheckout /> } />
      <Route
        path="/admin/manage"
        element={ <Admin /> }
      />
      <Route
        path="/seller/orders"
        element={ <SellerOrders /> }
      />
      <Route
        path="/seller/orders/:id"
        element={ <OrderDetails /> }
      />
      <Route 
        path="/customer/checkout"
        element={ <CustomerCheckout /> }
      />

    </Routes>
  );
}

export default App;
