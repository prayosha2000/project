
// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/Login/Login';
import ProductList from './components/ProductList/ProductList';
import About from './components/About/About';
import './App.css';

const App = () => {
  const [accessToken, setAccessToken] = useState('');

  const handleLoginSuccess = (token) => {
    setAccessToken(token);
  };

  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Use "/" as the path for the Login component */}
          <Route path="/" element={<Login onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/product-list" element={<ProductList accessToken={accessToken} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
// test45@yopmail.com 
// Test@123