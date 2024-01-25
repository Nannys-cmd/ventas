// src/components/Product.jsx

import React from 'react';

function Product({ product }) {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
      <button>Agregar al carrito</button>
    </div>
  );
}

export default Product;

