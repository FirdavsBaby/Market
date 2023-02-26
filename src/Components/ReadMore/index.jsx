import React from 'react'

const ReadMore = ({title, image, category, brand, stock, rating, price, description}) => {
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
          </div>
  )
}

export default ReadMore
