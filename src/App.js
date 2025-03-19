import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    { id: 1, name: 'GARMIN', item: 'Watch', price: '$10', image: watch },
    { id: 2, name: 'NIKE', item: 'Headband', price: '$20', image: headband},
    { id: 3, name: 'SLM', item: 'Waterbottle', price: '$30', image: waterbottle },
    { id: 4, name: 'HOKA', item: 'Running Shoe', price: '$10', image: hoka },
    { id: 5, name: 'GU', item: 'Energy Gel', price: '$20', image: gels},
    { id: 6, name: 'NATHAN', item: 'Hydration Vest', price: '$30', image: vest },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const clearCart = () => setCartItems([]);
  

  return (
    <div>
      <h1>WILD FEMME</h1>
      <h4><i>unapologetically strong and free-spirited</i></h4>
     <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cartItems}  />  
      <Button variant='outline-warning' onClick={() => clearCart(cartItems.id)}>CLEAR</Button>
    </div>
  );
};

export default App;
