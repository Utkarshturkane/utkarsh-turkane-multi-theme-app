import { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <h1 className="text-2xl font-bold mb-4 col-span-1 sm:col-span-2 md:col-span-3">
        Products
      </h1>
      {products.map((product) => (
        <div
          key={product.id}
          className="p-4 shadow rounded bg-white dark:bg-gray-800 flex flex-col"
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-40 object-contain mb-4"
          />
          <h2 className="text-base sm:text-lg font-bold mb-2">
            {product.title}
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {product.description.slice(0, 100)}...
          </p>
        </div>
      ))}
    </section>
  );
}

export default Home;
