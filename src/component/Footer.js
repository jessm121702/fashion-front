// Import necessary libraries
import React from "react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import img1 from "../assests/bottle2.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        {/* Navigation Links */}
        <div className="mb-6 md:mb-0">
          <nav className="flex flex-row md:flex-col space-y-0 md:space-x-0 space-x-6 md:space-y-4 text-gray-400 text-lg">
            <a href="/services" className="hover:text-white">
              SERVICES
            </a>
            <a href="/myportal" className="hover:text-white">
              MY PORTAL
            </a>
            <a href="/subscription" className="hover:text-white">
              CONTACT
            </a>
          </nav>
        </div>

        {/* Center Logo */}
        <div className="mb-6 md:mb-0">
          <img
            src={img1}
            alt="Footer Logo"
            className="w-full max-w-xs h-auto"
          />
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-row md:flex-col space-y-0 md:space-y-4 md:space-x-0 space-x-6 text-2xl">
          <a href="#" aria-label="Twitter" className="hover:text-gray-400">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-400">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-gray-400">
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
