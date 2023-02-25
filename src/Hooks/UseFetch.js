import React, { useEffect, useState } from "react";
function useFetch(url) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async function () {
      let res = await fetch(url);
      let response = await res.json();
      let data = response.products;
      setProducts(data);
      console.log(data);
    })();
  }, []);
  return { products };
}

export default useFetch;
