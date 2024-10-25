import React from "react";
import { useEffect, useState } from "react";
import {starsImg} from "../assets/images"



const ProductView = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setProductsVisible] = useState(6);
  const [allVisible, setAllVisible] = useState(false);
  

  /* The `useEffect` hook in the provided code snippet is making an API call to fetch product data
    from the URL "https://api.escuelajs.co/api/v1/products" when the component mounts for the first
    time. */
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(products);

  const handleViewAllClick=()=>{
    setAllVisible(true);
    setProductsVisible(proudcts.length);
  }

 

 

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, visibleProducts).map((product) => (
            <div key={product.id} className="border p-4 rounded-lg ">
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
                <div className="flex space-x-2 items-center w-full">
                  <p className="text-gray-500 line-through">
                    ${product.price.toFixed(2)}
                  </p>
                  <p className="text-indigo-500 font-bold">

                    ${((product.price - product.price * (product.discountPercentage / 100)).toFixed(2))}{" "}
                    <span className="text-xs font-light text-red-600 bg-gray-200 p-1 rounded-xl">-{product.discountPercentage}%</span>

                  </p>

                </div>
              ):(
                <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
              )}

            </div>
          ))}

        </div>
      </div>
    </>
  );
};

export default ProductView;
