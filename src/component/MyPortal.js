import React from "react";

const MyPortal = () => {
  return (
    <div className="bg-beige h-[50vh] flex flex-col justify-center items-center p-6 mt-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">My Portal</h1>

      {/* Description */}
      <p className="text-gray-600 text-center max-w-md mb-6">
        Upload your CSV files from your spreadsheet and add your data to quickly
        send your emails to multiple users.
      </p>

      {/* Button */}
      <button className="bg-[#E91E63]  text-white font-semibold py-3 px-6 rounded-md hover:bg-pink-600 transition duration-300">
        Let’s Get Started
      </button>
    </div>
  );
};

export default MyPortal;
