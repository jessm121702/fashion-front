import React from "react";

const CallToAction = () => {
  return (
    <section className=" py-20 bg-[#dcd8d4] min-h-screen  flex justify-center items-center">
      <div className="container mx-auto text-center px-4 md:px-8">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Make Emailing Simple
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-base md:text-xl mb-8 max-w-2xl mx-auto">
          The ultimate email automation platform designed for fashion stylists.
          We simply outreach to brands, giving you more time to focus on what
          you do best --- Styling.
        </p>

        {/* Button */}
        <a
          href="/subscription"
          className="bg-[#2B2929] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-pink-600 transition duration-300"
        >
          Let’s Get Started
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
