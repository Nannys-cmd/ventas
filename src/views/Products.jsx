// src/views/Products.jsx

import React from 'react';
import Product from '../components/Product';
import productsData from '../data/products';
import '../styles/Products.css'

function Products() {
  return (
    <div>
      <h2>Lista de Productos</h2>
      <div className="product-list">
        {productsData.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;

