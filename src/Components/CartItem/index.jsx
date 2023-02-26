import React from 'react'

const CartItem = ({image, price, count, title, brand}) => {
  return (
    <div className="cartItem">
      <img
        src={image}
        alt="ItemPhoto"
      />
      <div className="itemText">
        <h4>Title: {title}</h4>
        <h5>Brand: {brand}; Price: {price}; Count: {count}</h5>
      </div>
      <button className="removeButton">
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}

export default CartItem
