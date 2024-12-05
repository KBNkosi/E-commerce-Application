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
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.success('You have successfully subscribed to our newsletter!');
      setEmail("");
    } else {
      toast.error('Please enter a valid email address');
    }
  };

  return (
    <footer className="bg-[#1F1F1F] text-white">
      <ToastContainer theme="dark" position="top-right" autoClose={3000} hideProgressBar />
      
      {/* Subscribe Section*/}
      <section className="py-10 px-4 md:px-10">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl md:text-2xl font-semibold text-center md:text-left">
            Stay up to date about our latest offers
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full min-w-[300px] pl-10 pr-4 py-2 border border-gray-600 rounded-full 
                         bg-gray-800/50 text-white placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                         hover:bg-gray-800 transition-colors"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 
                       transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 
                       focus:ring-indigo-500 whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </section>

      {/* Main Footer Content */}
      <section className="border-t border-gray-800 py-10 px-4 md:px-10">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Site info */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="text-2xl font-bold mb-4 block hover:text-indigo-400 transition-colors">
              SHOPRO.CO
            </Link>
            <p className="text-gray-400 mb-6 text-sm">
              Your one-stop destination for premium fashion and lifestyle products.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src={youtubeIcon} alt="YouTube" className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/works" className="text-gray-400 hover:text-white transition-colors">Works</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Help</h3>
            <ul className="space-y-3">
              <li><Link to="/support" className="text-gray-400 hover:text-white transition-colors">Customer Support</Link></li>
              <li><Link to="/delivery" className="text-gray-400 hover:text-white transition-colors">Delivery Details</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">FAQ</h3>
            <ul className="space-y-3">
              <li><Link to="/account" className="text-gray-400 hover:text-white transition-colors">Account</Link></li>
              <li><Link to="/orders" className="text-gray-400 hover:text-white transition-colors">Orders</Link></li>
              <li><Link to="/payments" className="text-gray-400 hover:text-white transition-colors">Payments</Link></li>
              <li><Link to="/delivery" className="text-gray-400 hover:text-white transition-colors">Manage Deliveries</Link></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/ebooks" className="text-gray-400 hover:text-white transition-colors">Free eBooks</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">How to Blog</Link></li>
              <li><Link to="/youtube" className="text-gray-400 hover:text-white transition-colors">YouTube Playlist</Link></li>
              <li><Link to="/tutorials" className="text-gray-400 hover:text-white transition-colors">Development Tutorial</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="border-t border-gray-800 py-6 px-4 md:px-10">
        <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-4">
          <span className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Shopro.co. All rights reserved.
          </span>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <img src={visa} alt="Visa" className="h-8 w-auto" />
            <img src={masterCard} alt="Mastercard" className="h-8 w-auto" />
            <img src={googlePay} alt="Google Pay" className="h-8 w-auto" />
            <img src={applePay} alt="Apple Pay" className="h-8 w-auto" />
            <img src={paypal} alt="PayPal" className="h-8 w-auto" />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
