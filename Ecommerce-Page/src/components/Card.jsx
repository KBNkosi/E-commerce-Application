import React from 'react'
import { useState,useEffect } from 'react'
import {fallBackImages} from '../assets/images'

const Card = () => {
    const [products, setProducts] = useState([]);

    /* The `useEffect` hook in the provided code snippet is making an API call to fetch product data
    from the URL "https://api.escuelajs.co/api/v1/products" when the component mounts for the first
    time. */
    useEffect(() => {
        fetch(" https://api.escuelajs.co/api/v1/products")
          .then((res) => res.json())
          .then((data) => setProducts(data))
          .catch((err) => console.log(err));
      }, []);

      console.log(products)
      

    /**
     * Handles the error event when an image fails to load.
     * @param {Object} e - The event object.
     * @param {Number} index - The index of the product in the products array.
     */
      function handleImageError(e,index) {
        e.target.src = fallBackImages[index % fallBackImages.length];
      }

  return (
    <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 border-2">
        {products.map((product, index) => (
            <div key={product.id} className="shadow-md p-4 rounded-lg max-w-xs mx-auto">
              <div className="w-full h-56 flex justify-center items-center overflow-hidden">
                <img
                  src={product.images && product.images.length > 0 ? product.images[0] : fallBackImages[index % fallBackImages.length]}
                  alt="Stock image"
                  className="object-cover w-full h-full"
                  onError={(e)=>handleImageError(e,index)}
                />
              </div>
              <div className="mt-6">
                <p className="font-md text-lg ">{product.title}</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm text-gray-500 line-through">
                    ${product.price}
                  </p>
                  <p className="text-lg font-bold text-orange-600">
                    ${Math.floor(product.price * 0.8)}
                  </p>
                </div>
              </div>
            </div>
          ))}
    </div>
  )
}

export default Card