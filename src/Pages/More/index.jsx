import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ReadMore from "../../Components/ReadMore";
import useFetch from "../../Hooks/UseFetch";
import "./more.scss";
const SearchAnswer = () => {
    const { title } = useParams();
    let {products, loading} = useFetch("https://dummyjson.com/products");
    let filterProducts = products.find((p) => p.title === title) || title
  return (
    <section id="moreInfo" className="container">
      { loading ? <div className="loading">
        <h1>Loading..</h1>
        <div className="circle"></div>
      </div> :
      <ReadMore
        title={filterProducts.title}
        image={filterProducts.thumbnail}
        category={filterProducts.category}
        brand={filterProducts.brand}
        stock={filterProducts.stock}
        rating={filterProducts.rating}
        price={filterProducts.price}
        description={filterProducts.description}
      />}
    </section>
  );
};

export default SearchAnswer;
