import {
  instagramIcon,
  twitterIcon,
  youtubeIcon,
  visa,
  masterCard,
  googlePay,
  applePay,
  paypal,
} from "../assets/icons";
import { useState } from "react";
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
   if(email){
    toast.success('You have successfully subscribed to our newsletter!');
    setEmail("");
   }else{
    toast.error('Please enter email address');
   }
  };

  return (
    <footer>
      {/*Toast container */}
      <ToastContainer theme="dark" position="top-right" autoClose={3000} hideProgressBar />
      {/* Subscribe Section*/}
      <section className="bg-[#1F1F1F] text-white py-10 px-4 md:px-10 flex flex-col md:flex-row justify-between items-center">
        <div className="text-lg md:text-2xl font-semibold ">
          Stay up to date about our latest offers
        </div>

        <div className="flex flex-col items-center mt-6 md:mt-0">
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-300">
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
            className="ml-4 mt-4 py-2 px-6 rounded-full bg-transparent border border-gray-400 "
          >
            Subscribe
          </button>
        </div>
      </section>

      <section className="bg-[#F0F0F0] text-gray-700 py-10 px-4 md:px-10">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid md:grid-cols-5 gap-10">
          {/*Site info */}
          <div>
            <h2 className="text-xl font-bold mb-2">SHOPRO.CO</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              adipisci!
            </p>
            <div className="flex xspace-x-4">
              <img src={instagramIcon} alt="Instagram icon" />
              <img src={twitterIcon} alt="twiiter icon" />
              <img src={youtubeIcon} alt="youtube icon" />
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Company</h3>
            <ul className="flex flex-col space-y-4">
              <li>About</li>
              <li>Works</li>
              <li>Career</li>
              <li>Features</li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Help</h3>
            <ul className="flex flex-col space-y-4">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div>
            <h3 className="font-semibold text-lg mb-2">FAQ</h3>
            <ul className="flex flex-col space-y-4">
              <li>Account</li>
              <li>Orders</li>
              <li>Payments</li>
              <li>Manage deliveries</li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Resources</h3>
            <ul className="flex flex-col space-y-4">
              <li>Free eBooks</li>
              <li>How to Blog</li>
              <li>Youtube Playlist</li>
              <li>Development Tutorial</li>
            </ul>
          </div>
        </div>
      </section>
      <hr />
      <section className="flex flex-col space-y-2 px-4 items-center bg-[#F0F0F0]  text-gray-600 py-4  md:flex-row justify-between ">
        <span className="text-sm">Copyright &copy; 2023 Shopro.co</span>
        <div className="flex">
          <img src={visa} alt="visa badge" />
          <img src={masterCard} alt="mastercard badge" />
          <img src={googlePay} alt="google pay badge" />
          <img src={applePay} alt="apple pay badge" />
          <img src={paypal} alt="paypal badge" />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
