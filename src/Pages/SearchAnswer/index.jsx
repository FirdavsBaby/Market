import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/UseFetch";
import "./SearchAnswer.scss";
const SearchAnswer = () => {
    const { title } = useParams();
    let products = useFetch("https://dummyjson.com/products");
    let getProducts = products.products;
    console.log(getProducts);
    // let filterProducts = getProducts.find((p) => p.title === title);
  return (
    <section id="moreInfo">
      <div className="container">
      {getProducts.map(p=> {
         <div className="cardProduct">
        <img src={p.thumbnail} alt="ProductImage" />
           <h1>{p.title}</h1>
           <h2>
             Cartegory: {p.category} Brand: {p.brand}
           </h2>
           <p>{p.description}</p>
           <span>
             Price: {p.price}$ ; Rating: {p.rating}; Stock: {p.stock}
           </span>
         </div>;
        })}
        </div>;
    </section>
  );
};

export default SearchAnswer;
