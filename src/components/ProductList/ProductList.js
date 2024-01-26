// ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './ProductList.css';
import ProductCard from './ProductCard';

const ProductList = ({ accessToken }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://api.kalpav.com/api/v1/product/category/retail', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching product list', error);
      }
    };

    fetchProducts();
  }, [accessToken]);

  useEffect(() => {
    // Implement search logic here
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  return (
    <div className="product-list-container">
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="product-cards">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
