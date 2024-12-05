import { useState} from "react";
import { Link } from "react-router-dom";
import {FaShoppingCart, FaUser, FaSearch,FaBars,FaTimes} from "react-icons/fa"
import { useCart } from "../context/CartContext";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const { itemCount } = useCart();

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
      event.preventDefault();
      console.log("Search term:", searchTerm);
    };

  return (
    <nav className="bg-[#FFFFFF] text-gray-700 py-4 px-4 ">
        <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-2xl text-gray-950 font-extrabold">
            SHOPRO.CO
            </Link>

            {/*Links (Deskptop) */}
              <div className="hidden md:flex space-x-4">
                <Link to="/" className="hover:text-gray-300">Home</Link>
                <Link to="/products" className="hover:text-gray-300">Products</Link>
                <Link to="/about" className="hover:text-gray-300">About</Link>
                <Link to="/contact" className="hover:text-gray-300">Contact</Link>
              </div>

              {/*Search Bar (Desktop)*/}
              <form onSubmit={handleSearchSubmit} className="flex items-center  bg-gray-300  rounded-full placeholder-gray-400">
                 <FaSearch size={24} className="ml-4 text-gray-700" />
                <input
                  type="text"
                  placeholder="Search products"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="bg-transparent text-gray-700 focus:outline-none border-none py-2 px-4"
                />
                <button type="submit" className="ml-2">
                </button>
                </form>

              {/*Icons*/}
              <div className="flex items-center space-x-4">
                <Link to="/cart" className="relative">
                  <FaShoppingCart className="hover:text-indigo-400 cursor-pointer" size={24}/>
                  {itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-indigo-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {itemCount}
                    </span>
                  )}
                </Link>
                <FaUser className="hover:text-indigo-400 cursor-pointer"/>
              </div>

              {/*Hamburger Icon*/}
               <div className="md:hidden onClick={toggleMenu}"> 
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24}/>}

               </div>
        </div>

        {/*Mobile Menu*/}
        {isOpen && (
          <div className="md:hidden bg-[#1F1F1F] text-white space-y-2 py-3">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-gray-300">Home</Link>
              <Link to="/products" className="hover:text-gray-300">Products</Link>
              <Link to="/about" className="hover:text-gray-300">About</Link>
              <Link to="/contact" className="hover:text-gray-300">Contact</Link>
            </div>
          </div>
        )}
        
    </nav>
   
  );
};

export default Navbar