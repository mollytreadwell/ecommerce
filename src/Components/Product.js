import React from 'react';
import { Button } from 'react-bootstrap';
import './../App.css'

const Product = ({ product, addToCart }) => {

  return (
    <div className='column'>
      <h2>{product.name}</h2>
      <p>{product.item}: {product.price}</p>
      <img className="img" src={product.image} alt='image'/>
      <br/>
      <Button variant='outline-warning' className="button" onClick={() => addToCart(product)}>Add to Basket</Button>
    </div>
  );
};

export default Product;
