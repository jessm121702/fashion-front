import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <nav className="bg-beige p-4">
      <div className="container mx-auto flex justify-center items-center">
        <ul className="flex space-x-8 text-sm font-medium">
          <li>
            <Link
              to="/"
              className={`${
                activeLink === "/" ? "text-[#E91E63]" : "text-gray-600"
              } hover:text-[#E91E63] cursor-pointer`}
              onClick={() => handleLinkClick("/")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`${
                activeLink === "/services" ? "text-[#E91E63]" : "text-gray-600"
              } hover:text-[#E91E63] cursor-pointer`}
              onClick={() => handleLinkClick("/services")}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/myportal"
              className={`${
                activeLink === "/myportal" ? "text-[#E91E63]" : "text-gray-600"
              } hover:text-[#E91E63] cursor-pointer`}
              onClick={() => handleLinkClick("/myportal")}
            >
              My Portal
            </Link>
          </li>
          <li>
            <Link
              to="/faq"
              className={`${
                activeLink === "/faq" ? "text-[#E91E63]" : "text-gray-600"
              } hover:text-[#E91E63] cursor-pointer`}
              onClick={() => handleLinkClick("/faq")}
            >
              FAQs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
