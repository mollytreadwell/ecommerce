import React from 'react';
import './../App.css'

const Product = ({ product, addToCart }) => {
  return (
    <div className='column'>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <img className="img" src={product.image} alt='image'/>
      <br/>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
