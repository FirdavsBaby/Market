import React from 'react'

const Card = ({ title, brand, stock, raiting , price, img}) => {
  return (
    <div className="card">
      <img src={img} className="card-top" alt="product_photo" />
      <div className="card-bottom">
        <h3>{title}</h3>
        <span>
          Brand: {brand} & Stock: {stock} 
        </span>
        <span>
          <i className="fa-solid fa-star"></i> {raiting} & {price} $
        </span>
        <button id='more'>Read More</button>
      </div>
    </div>
  );
}

export default Card
