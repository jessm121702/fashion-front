import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assests/WhatsApp Image 2024-12-21 at 14.52.31.jpeg";
import { AuthContext } from "../context/AuthContext"; // Adjust the path if needed

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logout, isAuthenticated } = useContext(AuthContext);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="p-12 top-0 left-0 w-full z-50 bg-[#dcd8d4]">
      <div className="container mx-auto flex justify-between md:justify-around items-center">
        <Link to="/">
          <img
            src={logo}
            alt="Brand Logo"
            className=" md:w-48 h-16 md:h-20 object-contain"
          />
        </Link>

        <button
          className="md:hidden text-gray-800 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Links */}
        <ul
          className={`absolute md:static ${isMenuOpen ? "top-[95px] pb-4" : "top-[70px]"
            } flex flex-col md:flex-row items-center left-0 bg-white md:bg-transparent w-full md:w-auto space-y-4 md:space-y-0 md:space-x-16 text-sm font-medium transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
            } transition-transform duration-300 md:transition-none`}
        >
          {[
            { path: "/services", label: "Services" },
            { path: "/myportal", label: "My Portal" },
            { path: "/faq", label: "FAQs" },
            { path: "/subscription", label: "Contact" },
          ].map(({ path, label }) => (
            <li key={path} className="px-4 md:px-0 text-lg font-bold">
              <Link
                to={path}
                className={`${activeLink === path ? "text-[#E91E63]" : "text-[#000000]"
                  } hover:text-[#E91E63] cursor-pointer`}
                onClick={() => handleLinkClick(path)}
              >
                {label}
              </Link>
            </li>
          ))}

          {/* Logout Button */}
          {isAuthenticated && (
            <li className="px-4 md:px-0 text-lg font-bold">
              <button
                onClick={handleLogout}
                className="bg-gradient-to-r from-[#E91E63] to-[#FF6F91] text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
