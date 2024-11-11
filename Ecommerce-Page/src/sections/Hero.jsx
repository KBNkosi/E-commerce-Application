import React from "react";
import { heroImg, pradaLogo, zaraLogo, calvinLogo,kleinLogo } from "../assets/images";

const Hero = () => {
  
  return (
    <>
     <div className="relative h-screen flex justify-center items-center bg-gray-100">
  <img
    src={heroImg}
    alt="Hero Image"
    className="absolute top-0 left-0 w-full h-full object-cover brightness-75"
  />
  <div className="relative z-10 text-white text-center px-4">
    <h1 className="text-5xl font-bold mb-4">Shop Clothes That<br/> Match Your Style</h1>
    <p className="text-xl mb-6">Get the best deals on your favorite products</p>
    <button className="bg-indigo-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg">
      Shop Now
    </button>
  </div>
  <div className=" w-full bg-indigo-500 text-white px-24 py-6 absolute bottom-0 left-0 ">
    <div className="flex flex-wrap justify-between items-center text-2xl font-bold">
      <img src={zaraLogo} alt="zara logo" />
      <img src={pradaLogo} alt="prada logo" />
      <img src={calvinLogo} alt="calvin logo" />
      <img src={kleinLogo} alt="klein logo" />
    </div>
  </div>
</div>

    </>
  );
};

export default Hero;
