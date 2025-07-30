import { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="grid md:grid-cols-3 gap-6">
      <h1 className="text-2xl font-bold mb-4 col-span-3">Products</h1>
      {products.map((product) => (
        <div
          key={product.id}
          className="p-4 shadow rounded bg-white dark:bg-gray-800"
        >
          <img src={product.image} className="h-40 mx-auto" />
          <h2 className="text-lg font-bold">{product.title}</h2>
          <p className="text-sm">{product.description.slice(0, 100)}...</p>
        </div>
      ))}
    </section>
  );
}

export default Home;
