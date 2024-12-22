// Import necessary libraries
import React from "react";
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-beige text-gray-800 py-6 mt-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Navigation Links */}
        <div className="flex justify-center space-x-8 mb-4 mt-8">
          <a href="/" className="font-semibold hover:underline">
            Home
          </a>
          <a href="/services" className="font-semibold hover:underline">
            Services
          </a>
          <a href="/myportal" className="font-semibold hover:underline">
            My Portal
          </a>
          <a href="/faq" className="font-semibold hover:underline">
            FAQS
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 text-xl mb-12 mt-12">
          <a href="#" aria-label="Twitter" className="hover:text-gray-600">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-600">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-gray-600">
            <FaFacebook />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-gray-600">
            <FaYoutube />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-sm border-t border-gray-300 pt-2">
          &copy; 2024 All rights reserved. This is Your Company
        </p>
      </div>
    </footer>
  );
};

export default Footer;
