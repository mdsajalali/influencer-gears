import { useEffect, useState } from "react";
import Product from "../components/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch("productsData.json");
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <p className="text-center text-3xl">Loading...</p>;
  return (
    <div>
      <h1 className="mb-8 mt-14 text-center text-2xl">Popular Collection</h1>
      <div className="grid grid-cols-1 place-items-center gap-10 md:grid-cols-2   lg:grid-cols-3">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
