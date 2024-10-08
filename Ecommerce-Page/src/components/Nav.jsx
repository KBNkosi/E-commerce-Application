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



export const Nav = ({isMenuOpen, setIsMenuOpen}) => {
  

  const toggleMenu = () => {
    setIsMenuOpen((prevState)=>!prevState);
     
  };

  

  return (
    <nav className=" flex justify-around items-center p-4">
      {/* logo  */}
      <div className="flex">
        <img src={logo} alt="logo" />
        <p className=" my-auto font-extrabold text-lg">OmMart</p>
      </div>

      {/* menu  */}
      <ul className="hidden lg:flex gap-4 font-medium text-sm">
        <li>HOME</li>
        <li>ABOUT US</li>
        <li>SHOP</li>
        <li>COLLECTION</li>
        <li>PAGE</li>
      </ul>

      {/* icons  */}
      <div className="flex gap-3 my-auto cursor-pointer">
        <img src={searchIcon} alt="search icon" className="h-7" />

        <img src={starIcon} alt="star icon" className="h-7" />

        <img src={profileIcon} alt="profile icon" className="h-7" />

        <img src={cartIcon} alt="cart icon" className="h-7" />
      </div>

      {/* social icons  */}

      <div className="hidden md:flex gap-3">
        <a href="#">
          <img src={instagramIcon} alt="instagram icon" className="h-6" />
        </a>
        <a href="#">
          <img src={twitterIcon} alt="twitter icon" className="h-6" />
        </a>
        <a href="#">
          <img src={youtubeIcon} alt="youtube icon" className="h-6" />
        </a>
      </div>

      <div>
        {/* menu icon  */}
        <div className="lg:hidden my-auto relative">
          <button onClick={toggleMenu}>
            <img src={menuIcon} alt="menu icon" />
          </button>
        </div>

        {/* mobile menu  */}
        {isMenuOpen && (
          <div className="lg:hidden absolute p-4 top-10 right-0  shadow-md z-50 ">
            <ul className="flex-col py-4 text-sm">
              <li className="py-1">HOME</li>
              <li className="py-1">ABOUT US</li>
              <li className="py-1">SHOP</li>
              <li className="py-1">COLLECTION</li>
              <li className="py-1">PAGE</li>
            </ul>
          </div>
        )}
      </div>
      
    </nav>
  );
};
