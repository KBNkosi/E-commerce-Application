import React from "react";
import Button from "../components/Button";
import phoneIcon from "../assets/icons/bx-phone-call.png";
import { heroImg, OmMartImg } from "../assets/images";

const Hero = ({isMenuOpen}) => {
  
  return (
    <>
      <div className={`flex flex-col-reverse md:flex-row justify-center items-center ${isMenuOpen ? 'mt-48 mx-16' : 'm-16'}`}>
        <div className="my-7 ">
          <div className="flex flex-col gap-3 justify-center items-center">
            <p className="italic font-medium text-[#393939] text-2xl">
              Starting At Only $0.5
            </p>
            <h1 className="text-5xl font-bold text-[#151718] max-w-lg text-center">
              <span className="text-orange-600">SUMMER</span> SPECIAL COLLECTION
            </h1>
            <p className="text-sm font-light">
              Brand day flat 20% off and free shipping
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 mt-7">
            <Button />
            <img src={phoneIcon} alt="phone icon" className="w-8 h-8" />
            <p>+1 234 567 890</p>
          </div>
        </div>
        <div className="relative">
          <img src={heroImg} alt="Happy man pointing left" className="h-3/4" />
          <img
            src={OmMartImg}
            alt="OmMart Image"
            className={`absolute top-20 right-0 h-4/5 -z-10 `}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
