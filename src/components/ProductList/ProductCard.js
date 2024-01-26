// ProductCard.js
import React from 'react';
import './ProductCard.css';  // Import your CSS file

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <div className="product-info">
        <h3>{product.name}</h3>
        {/* Add additional information if needed */}
      </div>
    </div>
  );
};

export default ProductCard;
