import { Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import './App.css';
import Login from './pages/login';
import Register from './pages/register';
import CustomerProducts from './pages/CustomerProducts';
import Admin from './pages/Admin';
import CustomerCheckout from './pages/CustomerCheckout';

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
        path="/admin/manage"
        element={ <Admin /> }
      />
      <Route
        path="/customer/checkout"
        element={ <CustomerCheckout /> }
      />
    </Routes>
  );
}

export default App;
