import {searchIcon, starIcon, profileIcon, cartIcon, instagramIcon, twitterIcon, youtubeIcon} from '../assets/icons'
import {logo} from '../assets/images'

export const Nav = () => {
  return (
    <nav className="flex justify-around items-center  border-2 border-red-500">
      <div className="flex">
        <img src={logo} alt="logo"  />
        <p className="my-auto font-bold text-lg">OmMart</p>
      </div>
      <ul className="flex gap-4 text-sm">
      <li>HOME</li>
      <li>ABOUT US</li>
      <li>SHOP</li>
      <li>COLLECTION</li>
      <li>PAGE</li>  
      </ul>
      <div className="flex gap-3 my-auto cursor-pointer">
<a href="#"><img src={searchIcon} alt="search icon" className="h-9" /></a>
<a href="#"><img src={starIcon} alt="star icon"  className="h-9" /></a>
<a href="#"><img src={profileIcon} alt="profile icon"  className="h-9" /></a>
<a href="#"><img src={cartIcon} alt="cart icon"  className="h-9" /></a>
      </div>

      <div className="flex gap-3">
        <a href="#"><img src={instagramIcon} alt="instagram icon"   /></a>
        <a href="#"><img src={twitterIcon} alt="twitter icon"  /></a>
        <a href="#"><img src={youtubeIcon} alt="youtube icon"  /></a> 
      </div>
    </nav>
  )
}
