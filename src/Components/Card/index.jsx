import React from 'react'
import { useNavigate } from 'react-router-dom';

const Card = ({ title, brand, stock, raiting , price, img}) => {
  function handleNavigate(navPath) {
    useNavigate(`/answer-question/${navPath}`)
    // console.log(`/answer-question/${navPath}`);
  }
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
        <button id="more" onClick={() => handleNavigate(title)}>
          Read More
        </button>
      </div>
    </div>
  );
}

export default Card
