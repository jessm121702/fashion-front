import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Import the tick icon

const PricingPlans = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-[#292828]">
      <h1 className="text-3xl font-bold mb-8 text-center text-white">
        Our Pricing Plans
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Plan 1 */}
        <div className="group border rounded-lg shadow-md p-6 text-left bg-[#292828] hover:bg-[#4cded4] transition-colors duration-300 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-white">
              Newbie On Street
            </h2>
            <p className="text-white mb-4">For 1-2 clients</p>
            <h3 className="text-2xl font-bold mb-4 text-white">$0/Month</h3>
            <div className="flex items-center text-gray-600 mb-4">
              <FaCheckCircle className="text-white text-xl" />
              <p className="ml-2 text-white">send up to 50 emails/mo</p>
            </div>
          </div>
          <div className="flex justify-center mt-auto">
            <button className="bg-[#FFFFFF] text-[#141313] font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-pink-600 transition duration-300 w-full max-w-[150px]">
              <a href="/subscription">Subscribe</a>
            </button>
          </div>
        </div>

        {/* Plan 2 */}
        <div className="group border rounded-lg shadow-md p-6 text-left bg-[#292828] hover:bg-[#4cded4] transition-colors duration-300 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-white">
              Seasoned Pro
            </h2>
            <p className="text-white mb-4">For 3-5 clients</p>
            <h3 className="text-2xl font-bold mb-4 text-white">$50/Month</h3>
            <div className="flex items-center text-gray-600 mb-4">
              <FaCheckCircle className="text-white text-xl" />
              <p className="ml-2 text-white">send up to 50 - 250 emails/mo</p>
            </div>
          </div>
          <div className="flex justify-center mt-auto">
            <button className="bg-[#FFFFFF] text-[#141313] font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-pink-600 transition duration-300 w-full max-w-[150px]">
              <a href="/subscription">Subscribe</a>
            </button>
          </div>
        </div>

        {/* Plan 3 */}
        <div className="group border rounded-lg shadow-md p-6 text-left bg-[#292828] hover:bg-[#4cded4] transition-colors duration-300 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-xl font-semibold text-[#ffffff] mb-2">Pro</h2>
            <p className=" text-[#ffffff] mb-4">For 3-5 clients</p>
            <h3 className="text-2xl text-[#ffffff] font-bold mb-4">
              $100/Month
            </h3>
            <div className="flex items-center text-[#ffffff] mb-4">
              <FaCheckCircle className="text-white text-xl" />
              <p className="ml-2 text-[#ffffff]">send up to 250+ emails/mo</p>
            </div>
          </div>
          <div className="flex justify-center mt-auto">
            <button className="bg-[#FFFFFF] text-[#141313] font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-pink-600 transition duration-300 w-full max-w-[150px]">
              <a href="/subscription">Subscribe</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
