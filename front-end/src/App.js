import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import CustomerProducts from './pages/CustomerProducts';
import rockGlass from './images/rockGlass.svg';

function App() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <div className="App">
            <span className="logo">TRYBE</span>
            <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
              Glass
            </object>
          </div>
        }
      />
      <Route
        path="/customer/products"
        element={ <CustomerProducts /> }
      />
    </Routes>
  );
}

export default App;
