
import {
  searchIcon,
  starIcon,
  profileIcon,
  cartIcon,
  menuIcon,
} from "../assets/icons";
import { logo } from "../assets/images";
import {Navbar} from "flowbite-react";





export const Nav = ({isMenuOpen, setIsMenuOpen}) => {
    

  return (
   <>
   <Navbar fluid rounded>
   <Navbar.Brand  href="https://flowbite-react.com">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt=" Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">OnMart</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse/>
      
   </Navbar>
     
   </>
   
  );
};
