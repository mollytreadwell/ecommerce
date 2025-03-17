import React, { useState } from 'react';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import watch from './images/watch.jpg';
import headband from './images/headband.jpg';
import waterbottle from './images/waterbottle.jpg';
import hoka from './images/hoka.jpg';
import gels from './images/gels.jpg';
import vest from './images/vest.jpg';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: '$10', image: watch },
    { id: 2, name: 'Product 2', price: '$20', image: headband},
    { id: 3, name: 'Product 3', price: '$30', image: waterbottle },
    { id: 4, name: 'Product 4', price: '$10', image: hoka },
    { id: 5, name: 'Product 5', price: '$20', image: gels},
    { id: 6, name: 'Product 6', price: '$30', image: vest },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <h1>Simple E-commerce</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;
