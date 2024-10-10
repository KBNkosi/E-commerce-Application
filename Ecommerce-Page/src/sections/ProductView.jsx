import React from "react";
import { useState, useEffect } from "react";
const ProductView = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(" https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

   

  return (
    <>
      <div>
        <div className="flex ">
        <a href="" className="text-white bg-orange-600 p-2 w-30 rounded-lg text-sm">All</a>
         <a href="" className="text-white bg-orange-600 p-2 w-30 rounded-lg text-sm">Electronics</a>
         <a href="" className="text-white bg-orange-600 p-2 w-30 rounded-lg text-sm">Clothes</a>
         <a href="" className="bg-orange-600 text-white text-sm px-4 py-2 rounded-lg">Shoes</a>
         <a href="" className="text-white bg-orange-600 p-2 w-30 rounded-lg text-sm">Furniture</a>
         <a href="" className="text-white bg-orange-600 p-2 w-30 rounded-lg text-sm">Miscellanous</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4 border-2">
          {products.map((product) => (
            <div key={product.id} className="mx-auto">
              <div>
                <img
                  src={product.images[0]}
                  alt="Stock image"
                  className="w-56 rounded-lg"
                />
              </div>
              <div className="max-w-64">
                <p className="font-md">{product.title}</p>
                <div className="flex space-x-6">
                  <p className="text-lg font-bold line-through">
                    ${product.price}
                  </p>
                  <p className="text-xl font-bold text-orange-600">
                    ${Math.floor(product.price * 0.8)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductView;
