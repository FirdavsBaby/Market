import React from 'react'
import CartItem from '../CartItem';
import "./cart.scss"
const Cart = () => {
  return (
    <section id="cart" className="container">
      <div className="cart-top">
        <h2>Your Cart</h2>
        <p>Total: 100$</p>
      </div>
      <div className="cartItems">
        <CartItem/>
      </div>
    </section>
  );
}

export default Cart
