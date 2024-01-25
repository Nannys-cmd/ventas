// src/App.jsx
import React from 'react';
import Products from './views/Products';
import './App.css';

function App() {
  return (
    <div id="app"> {/* Asegúrate de que el contenedor tiene el id "app" */}
      <h1>Nannys Revendedoras</h1>
      <Products />
    </div>
  );
}

export default App;

