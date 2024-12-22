import React from "react";
import img1 from "../assests/image (1).png";

const HeroSection = () => {
  return (
    <section className="bg-beige p-8 md:p-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Revolutionizing Fashion <br /> Brand Communication
          </h1>
          <p className="text-gray-600 text-sm md:text-base mb-6">
            The core function of this platform will be to import data from an
            Excel/CSV file and send personalized email blasts to multiple
            brands.
          </p>
          <a
            href="/portal"
            className="bg-[#E91E63] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-pink-600 transition duration-300"
          >
            Go To Portal
          </a>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={img1}
            alt="Fashion Communication"
            className="w-full rounded-lg "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
