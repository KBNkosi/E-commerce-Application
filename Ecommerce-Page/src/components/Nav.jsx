import {
  searchIcon,
  starIcon,
  profileIcon,
  cartIcon,
  instagramIcon,
  twitterIcon,
  youtubeIcon,
  menuIcon,
} from "../assets/icons";
import { logo } from "../assets/images";
import { useState } from "react";

export const Nav = () => {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!IsMenuOpen);
  };

  console.log(IsMenuOpen);
  return (
    <nav className="flex justify-around items-center  border-2 border-red-500">
      {/* logo  */}
      <div className="flex">
        <img src={logo} alt="logo" />
        <p className="my-auto font-bold text-lg">OmMart</p>
      </div>

      {/* menu  */}
      <ul className="hidden lg:flex gap-4 text-sm">
        <li>HOME</li>
        <li>ABOUT US</li>
        <li>SHOP</li>
        <li>COLLECTION</li>
        <li>PAGE</li>
      </ul>
      {/* icons  */}
      <div className="flex gap-3 my-auto cursor-pointer">
        <a href="#">
          <img src={searchIcon} alt="search icon" className="h-7" />
        </a>
        <a href="#">
          <img src={starIcon} alt="star icon" className="h-7" />
        </a>
        <a href="#">
          <img src={profileIcon} alt="profile icon" className="h-7" />
        </a>
        <a href="#">
          <img src={cartIcon} alt="cart icon" className="h-7" />
        </a>
      </div>

      {/* social icons  */}

      <div className="hidden md:flex gap-3">
        <a href="#">
          <img src={instagramIcon} alt="instagram icon" className="h-6" />
        </a>
        <a href="#">
          <img src={twitterIcon} alt="twitter icon" className="h-6"/>
        </a>
        <a href="#">
          <img src={youtubeIcon} alt="youtube icon" className="h-6"/>
        </a>
      </div>

      {/* menu icon  */}
      <div className="lg:hidden">
        <button onClick={toggleMenu}>
        <img src={menuIcon} alt="menu icon" />
        </button>
      </div>

      {/* mobile menu  */}
      {IsMenuOpen && (
        <div className="lg:hidden">
          <ul className="flex-col gap-1 text-sm">
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>SHOP</li>
            <li>COLLECTION</li>
            <li>PAGE</li>
          </ul>
        </div>
      )}
    </nav>
  );
};
