import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Card = ({ title, brand, stock, raiting , price, img}) => {
  function handleNavigate(navPath) {
    useNavigate(`/answer-question/${navPath}`);
    console.log(navPath);
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
        <Link id="more" to={`/answer-question/${title}`}>
          Read More
        </Link>
      </div>
    </div>
  );
}

export default Card
