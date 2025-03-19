import React from 'react';

const Cart = ({ cartItems }) => {


  return (
    <>
      <div>
      <h2><u>BASKET</u></h2>
      {cartItems.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
        </div>
      ))}
    </div>

    </>
  );
};

export default Cart;
