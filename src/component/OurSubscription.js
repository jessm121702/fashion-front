import React from "react";

const OurServices = () => {
  return (
    <div
      className="bg-beige flex flex-col justify-center items-start px-4 md:px-16 lg:px-32"
      style={{ minHeight: "50vh" }}
    >
      <nav className="text-sm text-gray-500 mb-2">
        <span>Home</span>
        <span className="mx-1">{">"}</span>
        <span className="text-[#E91E63] font-semibold">Subscription</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
        Purchase Our Plan
      </h1>
    </div>
  );
};

export default OurServices;
