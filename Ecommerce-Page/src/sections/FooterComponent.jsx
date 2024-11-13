import { instagramIcon, twitterIcon, youtubeIcon } from "../assets/icons";
import { useState } from "react";
const FooterComponent = () => {
  const [email, setEmail]=useState("");
  
  handleSubscribe=(e)=>{
    console.log("thanks for sunsbring");
  }
  return (
    <footer>
      {/* Subscribe Section*/}
      <section className="bg-gray-800 text-white py-10 px-4 md:px-10 flex flex-col md:flex-row justify-between items-center">
        <div className="text-lg md:text-2xl font-semibold ">
        Stay up to date about our latest offers
        </div>

        <div className="flex items-center mt-6 md:mt-0">
         <div className="relative">
           <span className="absolute inset-y-0 left-3 flex items-center text-gray-300" >
            {/* Email Icon*/}
           </span>
           <input 
           type="email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           placeholder="Enter your email"
           className="pl-10 pr-4 py-2 border border-gray-300 rounded-full bg-transparent text-white hover:bg-gray-700 transition"
            />
         </div>
          <button
          onClick={handleSubscribe}
          className="ml-4 px-6 rounded-full bg-transparent border border-gray-400 "
          >  
            Subscribe
          </button>
        </div>
      </section>
    </footer>
  )
}

export default FooterComponent