import React from "react";
import { maleShopper } from "../assets/images";
import SubscriptionForm from "../components/SubscriptionForm";
import Button from "../components/Button";

const Subscribe = () => {
  return (
    <>
      <div
        className="flex flex-col md:flex-row items-center space-y-16 md:space-y-0 md:space-x-16 border-2 
     max-w-full rounded-lg  mx-auto mt- p-4  "
      >
        <div className="w-full xs:w-[80%] h-auto md:w-1/2 xl:w-2/5">
          <img
            src={maleShopper}
            alt="a male shopping"
            className="object-cover w-full"
          />
        </div>
        <div>
          <div className=" w-full flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl font-bold mb-2">Subscribe and Get 10% off</h1>
            <p className="text-sm font-light mb-4">Get your discount code</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <SubscriptionForm className="w-full sm:w-3/4"/>
            <Button className="w-full sm:w-1/4" />
          </div>
          <p className="mt-3 font-light">Subscribe to our newsletter and get your discount code</p>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
