import React from "react";
import { useState, useEffect } from "react";
const ProductView = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  console.log(products);

  return (
    <>
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="">
            <div>
              <img src={product.image} alt="Stock image" className="w-40 h-44" />
            </div>
            <div className="max-w-56">
            <p className="">{product.title}</p>
            <p>{product.price}</p>  
            </div>
                   
        </div>
      ))}
      </div>
    </>
  );
};

export default ProductView;
