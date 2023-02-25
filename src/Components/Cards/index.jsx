import useFetch from '../../Hooks/UseFetch'
import Card from "../Card";
import "./cards.scss";
const Cards = () => {
  let products = useFetch("https://dummyjson.com/products");
  let getProducts = products.products
  return (
    <section id="cards">
      <h2 id="ourP">Our Products</h2>
      <div className="container">
        {getProducts.map((t) => (
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
