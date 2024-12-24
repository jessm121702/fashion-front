import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import img1 from "../assests/WhatsApp_Image_2024-12-21_at_14.52.31-removebg-preview.png";
import bgImg from "../assests/bgimg.jpeg";
import logo from "../assests/WhatsApp_Image_2024-12-21_at_14.52.31-removebg-preview.png";
import { useNavigate } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
const HeroSection = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsMenuOpen(false);
  };
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/myportal");
  };

  return (
    <section
      className="bg-beige p-8 min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Navbar */}
      <nav className="p-4 top-0 left-0 w-full z-50 ">
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
            className={`absolute md:static ${
              isMenuOpen ? "top-[95px] pb-4" : "top-[70px]"
            } flex flex-col md:flex-row items-center left-0 bg-white md:bg-transparent w-full md:w-auto space-y-4 md:space-y-0 md:space-x-16 text-sm font-medium transform ${
              isMenuOpen
                ? "translate-x-0"
                : "-translate-x-full md:translate-x-0"
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
                  className={`${
                    activeLink === path ? "text-[#E91E63]" : "text-[#000000]"
                  } hover:text-[#E91E63] cursor-pointer`}
                  onClick={() => handleLinkClick(path)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="container mx-auto mt-0 md:mt-6 flex flex-col md:flex-row items-center justify-center  min-h-[80vh] px-4 gap-8">
        <div className="container mt-4  mb-4 mx-auto px-6 md:px-20 lg:px-40">
          <div className="flex flex-col md:flex-row items-center md:items-start md:-mt-8 mt-0 md:ml-16 ml-0  border-2 border-[#000000]">
            {/* Text Section */}
            <div className="flex-1 flex flex-col justify-between text-center ml-0 md:ml-8 mt-6 pt-4 md:text-left space-y-4">
              {/* Top Content */}
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#1D2026] leading-tight">
                  WELCOME TO
                </h1>
                <p className="text-[#4E5566] mt-4 text-sm sm:text-base lg:text-lg">
                  STYLOIRE
                </p>
              </div>

              {/* Bottom Content */}
              <div className="flex items-center space-x-2 bg-gradient-to-r mt-12">
                <FaInstagram className="text-black text-2xl" />
                <span className="text-black font-bold text-lg">
                  @STYLOIRE.CO
                </span>
              </div>
            </div>

            <div className="flex-1 hidden md:flex pt-4 md:-mt-12 mt-0">
              <img
                src={img1}
                alt="Empowering Discord Community"
                className="  object-cover w-full max-h-[400px] md:max-h-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
