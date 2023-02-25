import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/UseFetch";
import "./SearchAnswer.scss";
const SearchAnswer = () => {
    const { title } = useParams();
    let products = useFetch("https://dummyjson.com/products");
    let getProducts = products.products;
    let filterProducts = getProducts.filter((p) => p.title === title);
    console.log(filterProducts);
  return (
    <section id="moreInfo">
      <div className="container">
        {filterProducts?.map(p=> {
          <div className="cardProduct">
            <img src={p.images[0]} alt="ProductImage" />
            <h1>{p.title}</h1>
            <h2>
              Cartegory: {p.category} Brand: {p.brand}
            </h2>
            <p>{filterProducts.description}</p>
            <span>
              Price: {p.price}$ ; Rating: {p.rating}; Stock: {p.stock}
            </span>
          </div>;
        })}
      </div>
    </section>
  );
};

export default SearchAnswer;
