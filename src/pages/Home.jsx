import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-48 object-contain mb-4 mx-auto"
            />
            <h2 className="text-base font-semibold mb-2">{product.title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-1 line-clamp-2">
              {product.description}
            </p>
            <p className="text-lg font-bold text-green-600 mb-1">
              ₹{(product.price * 80).toFixed(0)}{" "}
              {/* Convert USD to INR approx */}
            </p>
            <div className="flex items-center text-yellow-500 text-sm mb-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar
                  key={index}
                  className={
                    index < Math.round(product.rating.rate)
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }
                />
              ))}
              <span className="ml-2 text-gray-600 dark:text-gray-300">
                ({product.rating.count})
              </span>
            </div>
            <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;
