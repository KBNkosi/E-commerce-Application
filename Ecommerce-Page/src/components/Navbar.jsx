import { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import {FaShoppingCart, FaUser, FaSearch,FaBars,FaTimes} from "react-icons/fa"
import { useCart } from "../context/CartContext";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const { itemCount } = useCart();
    const navigate = useNavigate();

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
      event.preventDefault();
      if (searchTerm.trim()) {
        navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
        setSearchTerm("");
      }
    };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl text-gray-950 font-extrabold">
            SHOPRO.CO
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-4">
              <Link to="/" className="text-gray-700 hover:text-indigo-500 transition-colors">Home</Link>
              <Link to="/products" className="text-gray-700 hover:text-indigo-500 transition-colors">Products</Link>
              <Link to="/about" className="text-gray-700 hover:text-indigo-500 transition-colors">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-indigo-500 transition-colors">Contact</Link>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 justify-center px-4 max-w-md">
            <form onSubmit={handleSearchSubmit} className="w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full bg-gray-100 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <FaSearch className="text-gray-500" />
                </button>
              </div>
            </form>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <FaShoppingCart className="hover:text-indigo-500 cursor-pointer transition-colors" size={24}/>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-indigo-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {itemCount}
                </span>
              )}
            </Link>
            <FaUser className="hover:text-indigo-500 cursor-pointer transition-colors"/>
            
            {/* Hamburger Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search - Show below header when menu is open */}
        <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-96 py-4' : 'max-h-0 overflow-hidden'}`}>
          <form onSubmit={handleSearchSubmit} className="w-full px-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full bg-gray-100 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <FaSearch className="text-gray-500" />
              </button>
            </div>
          </form>
          
          {/* Mobile Menu Links */}
          <div className="mt-4 space-y-2">
            <Link to="/" className="block px-2 py-2 text-gray-700 hover:bg-gray-100 rounded-lg" onClick={toggleMenu}>Home</Link>
            <Link to="/products" className="block px-2 py-2 text-gray-700 hover:bg-gray-100 rounded-lg" onClick={toggleMenu}>Products</Link>
            <Link to="/about" className="block px-2 py-2 text-gray-700 hover:bg-gray-100 rounded-lg" onClick={toggleMenu}>About</Link>
            <Link to="/contact" className="block px-2 py-2 text-gray-700 hover:bg-gray-100 rounded-lg" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar