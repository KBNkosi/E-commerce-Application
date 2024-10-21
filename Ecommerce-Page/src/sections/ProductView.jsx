import React from "react";
import { useEffect, useState } from "react";
import {Button} from "flowbite-react"
import ProductCard from "../components/ProductCard";


const ProductView = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  /* The `useEffect` hook in the provided code snippet is making an API call to fetch product data
    from the URL "https://api.escuelajs.co/api/v1/products" when the component mounts for the first
    time. */
  useEffect(() => {
    fetch(" https://api.escuelajs.co/api/v1/products?offset=0&limit=30")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

 

  /**
   * Handles category change in product view by filtering the products based on the selected category.
   * If the selected category is "All", it shows all products, otherwise it filters them based on the selected category.
   * @param {string} category - The name of the selected category.
   */
  const handleCategoryChange = (category) => {
    if(category === "All"){
      setFilteredProducts(products);
      return;
    }else if(category === undefined){
      alert("product data not found");
      return;
    }
    
    else{
      var filtered = products.filter(
        (product) => product.category.name === category
      );
    }
    
    setFilteredProducts(filtered);
   
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex  gap-4 overflow-x-auto scrollbar-hide pb-6 lg:justify-center ">
          {[
            "All",
            "Clothes",
            "Furniture",
            "Shoes",
            "Electronics",
            "Miscellanous",
          ].map((category, index) => (
            <Button
              key={index}
              onClick={()=>handleCategoryChange(category)}
               outline gradientDuoTone="pinkToOrange"
            >
              {category}
            </Button>
          ))}
        </div>
        <div>
          <ProductCard products={filteredProducts} />
        </div>
      </div>
    </>
  );
};

export default ProductView;
