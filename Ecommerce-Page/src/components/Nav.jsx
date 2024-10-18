
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
    <div>NavBar</div>
   
  );
};
