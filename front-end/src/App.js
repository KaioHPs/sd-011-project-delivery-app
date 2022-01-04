import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import './App.css';
import Login from './pages/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
