import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []); // Run the effect only once on mount


  const uniqueCategories = [...new Map(products.map((item) => [item.category, item])).values()].slice(0, 4);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl text-center font-bold mb-4">
          Browse by Category
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {uniqueCategories.map((category,index) => (

            <Link
              to={`/products?category=${category.category}`}
              key={index}
              className="relative bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img src={category.thumbnail} 
              alt={category.title}
              className="w-full h-48 object-cover opacity-80"
               />

               <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                   {category.category}
 
                </h3>

               </div>
            </Link>
          ))};
        </div>
      </div>
    </>
  );
};

export default CategoryList;
