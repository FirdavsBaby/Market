import React, { useEffect, useState } from "react";
import Card from "../Card";
import "./cards.scss";
const Cards = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async function () {
      let res = await fetch("https://dummyjson.com/products");
      let response = await res.json();
      let data = response.products;
      console.log(data);
      setProducts(data);
    })();
  }, []);
  return (
    <section id="cards">
      <h2 id="ourP">Our Products</h2>
      <div className="container">
        {products.map((t) => (
          <Card key={crypto.randomUUID()}
            title={t.title}
            brand={t.brand}
            stock={t.stock}
            raiting={t.rating}
            price={t.price}
            img={t.images[0]}
          />
        ))}
      </div>
    </section>
  );
};

export default Cards;
