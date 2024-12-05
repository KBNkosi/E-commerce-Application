import { Link } from "react-router-dom";
import { heroImg, pradaLogo, zaraLogo, calvinLogo, kleinLogo } from "../../assets/images";

const Hero = () => {
  return (
    <div className="relative w-full">
      {/* Hero Container */}
      <div className="relative h-[calc(100vh-64px)] max-h-[800px] min-h-[600px] w-full">
        {/* Background Image Container */}
        <div className="absolute inset-0 bg-gray-900">
          <div className="relative w-full h-full">
            <img
              src={heroImg}
              alt="Hero Background"
              className="absolute w-full h-full object-cover object-top"
              style={{ objectPosition: '50% 30%' }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-white text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl">
            Shop Products That Match Your Needs
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl">
            Browse through our curated collection of premium product items
          </p>
          <Link 
            to="/products"
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-lg 
                     text-lg font-semibold transition-colors duration-300 
                     transform hover:scale-105 active:scale-95"
          >
            Shop Now
          </Link>
        </div>

        {/* Brand Logos Section */}
        <div className="absolute bottom-0 left-0 right-0 bg-indigo-500/90 backdrop-blur-sm">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-between items-center py-6 px-4 sm:px-6 lg:px-8 gap-8">
              <div className="w-1/2 sm:w-auto flex justify-center">
                <img src={zaraLogo} alt="Zara" className="h-8 sm:h-10 object-contain filter brightness-0 invert" />
              </div>
              <div className="w-1/2 sm:w-auto flex justify-center">
                <img src={pradaLogo} alt="Prada" className="h-8 sm:h-10 object-contain filter brightness-0 invert" />
              </div>
              <div className="w-1/2 sm:w-auto flex justify-center">
                <img src={calvinLogo} alt="Calvin Klein" className="h-8 sm:h-10 object-contain filter brightness-0 invert" />
              </div>
              <div className="w-1/2 sm:w-auto flex justify-center">
                <img src={kleinLogo} alt="Klein" className="h-8 sm:h-10 object-contain filter brightness-0 invert" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
