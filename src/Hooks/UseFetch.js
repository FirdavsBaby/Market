import React, { useEffect, useState } from "react";
function useFetch(url) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    (async function () {
      setLoading(true)
      let res = await fetch(url);
      let response = await res.json();
      let data = response.products;
      setProducts(data);
      setLoading(false)
    })();
  }, []);
  return { products , loading };
}

export default useFetch;
