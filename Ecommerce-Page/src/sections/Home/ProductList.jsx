import React from "react";
import { useEffect, useState } from "react";
import {starsImg} from "../../assets/images";
import axios from "axios";
import { Link } from "react-router-dom";


const ProductList = () => {
  
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [topSellingProducts, setTopSellingProducts] = useState(8);

  
 useEffect(()=>{
    axios.get("https://dummyjson.com/products")
   .then(response => {
      setProducts(response.data.products);
    })
   .catch(error => {
      console.error("Error fetching products:", error);
    });
  }, []); // Run the effect only once on mount


/**
 * Increases the number of products displayed by 4, up to the total number
 * of available products.
 */
  const handleViewMore = () => {
    setVisibleProducts((prev)=>Math.min(prev + 4, products.length));
  };

/**
 * Increases the number of top-selling products displayed by 4,
 * up to the total number of available products.
 */
  const handleViewMoreTopSelling = () => {
    setTopSellingProducts((prev)=>Math.min(prev + 4, products.length));
  }
 
  return (
    <>
      <div className="container mx-auto p-4">
        {/* New arrivals section */}
        <h1 className="text-4xl text-center font-extrabold my-10">NEW ARRIVALS</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products && products.length > 0 && products.slice(0, visibleProducts).map((product) => (
            <Link 
            to={`/products/${product.id}`}
            key={product.id}
            className="border p-4 rounded-lg hover:shadow-lg transition-all duration-300">
              <img 
              src={product.images[0]} 
              alt={product.name}
              className="w-full h-48 object-cover mb-2 rounded-md"
               /> 
               <h2 className="text-lg font-bold">{product.title}</h2>
               <div className="flex gap-4 text-sm">
               <img src={starsImg} alt="stars" /> <span>{product.rating}</span>
               </div>
               
              {/* Conditionally show discounted price*/}
              {product.discountPercentage >0?(
                <div className="flex flex-col sm:flex-row  sm:space-x-2 sm:items-center">
                  <p className="text-gray-500 line-through">
                    ${product.price.toFixed(2)}
                  </p>
                  <p className="text-indigo-500 font-bold sm:ml-2">

                    ${((product.price - product.price * (product.discountPercentage / 100)).toFixed(2))}{" "}
                    <span className="text-xs font-light text-red-600 bg-gray-200 p-1 sm:ml-2 rounded-xl">-{product.discountPercentage}%</span>

                  </p>

                </div>
              ):(
                <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
              )}

            </Link>
          ))}
          </div>

          {visibleProducts < products.length && (
            <div className="w-full flex justify-center mt-12 ">
            <button
              onClick={handleViewMore}
              className="w-40 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full"
            >
              View More
            </button>
            </div>
           
          )}

          <hr className="my-16  shadow-sm" />

        
        {/* Top selling section */}
        <h2 className="text-4xl text-center font-extrabold mt-8 mb-4">TOP SELLING</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products && products.length > 0 && products.slice(7, 7 + topSellingProducts).map((product) => (
              <Link 
               to={`/products/${product.id}`}
               key={product.id}
               className="border p-4 rounded-lg hover:shadow-lg transition-all duration-300">
              <img 
              src={product.images[0]} 
              alt={product.name}
              className="w-full h-48 object-cover mb-2 rounded-md"
               /> 
               <h2 className="text-lg font-bold">{product.title}</h2>
               <div className="flex gap-4 text-sm">
               <img src={starsImg} alt="stars" /> <span>{product.rating}</span>
               </div>
               {/* Conditionally show discounted price*/}
              {product.discountPercentage >0?(
                <div className="flex flex-col sm:flex-row  sm:space-x-2 sm:items-center">
                  <p className="text-gray-500 line-through">
                    ${product.price.toFixed(2)}
                  </p>
                  <p className="text-indigo-500 font-bold sm:ml-2">

                    ${((product.price - product.price * (product.discountPercentage / 100)).toFixed(2))}{" "}
                    <span className="text-xs font-light text-red-600 bg-gray-200 p-1 sm:ml-2 rounded-xl">-{product.discountPercentage}%</span>

                  </p>

                </div>
              ):(
                <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
              )}

            </Link>
            ))}
          </div>
          {topSellingProducts < products.length -7 && (
            <div className="flex justify-center mt-12 ">
              <button
              onClick={handleViewMoreTopSelling}
              className=" w-40 py-2   bg-indigo-500 hover:bg-indigo-600 text-white  rounded-full"
            >
              View More

            </button>
            </div>
            
          )}
      </div>
    </>
  );
};

export default ProductList;
