import useFetch from "../../Hooks/UseFetch";
import Card from "../Card";
import "./cards.scss";
const Cards = () => {
  let { products, loading } = useFetch("https://dummyjson.com/products");
  console.log(products);
  return (
    <section id="cards">
      <h2 id="ourP">Our Products</h2>
      <div className="container">
        {loading ? (
          <div className="loading">
            <h1>Loading..</h1>
            <div className="circle"></div>
          </div>
        ) : (
          products?.map((t) => (
            <Card
              key={crypto.randomUUID()}
              title={t.title}
              brand={t.brand}
              stock={t.stock}
              raiting={t.rating}
              price={t.price}
              img={t.images[0]}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default Cards;
