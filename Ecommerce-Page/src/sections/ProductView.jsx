import React from "react";
import Card from "../components/Card";

const ProductView = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap justify-center gap-4 mb-6 ">
        {["All","Clothes","Furniture","Shoes","Electronics","Miscellanous"].map((item,index)=>(
          <a key={index} href="" className="bg-orange-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-orange-700">{item}</a>
        ))}
        </div>
        <div>
          <Card />
        </div>
      </div>
    </>
  );
};

export default ProductView;
