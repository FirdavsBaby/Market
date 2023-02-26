import React from 'react'
import { useDispatch } from 'react-redux';

const ReadMore = ({title, image, category, brand, stock, rating, price, description}) => {
  const dispatch = useDispatch();
  return (
    <div className="cardProduct">
            <h1>{title}</h1>
            <img src={image} alt="ProductImage" />
            <h2>
              Cartegory: {category} &  Brand: {brand}
            </h2>
            <p>{description}</p>
            <span>
              Price: {price}$ ; Rating: {rating}; Stock: {stock}
            </span>
            <button className='addCart'>Add to Cart</button>
          </div>
  )
}

export default ReadMore
