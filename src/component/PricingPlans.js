import React, { useState } from "react";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";

const PricingPlans = ({ email }) => {
  const [subscriptionType, setSubscriptionType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (type) => {
    if (!email) {
      alert("Email is required. Please log in.");
      return;
    }

    setSubscriptionType(type);
    setIsLoading(true);

    try {
      const response = await axios.post("https://fashion-back-production.up.railway.app/user/Subscription", {
        email,
        subscriptionType: type,
      });

      const { url, message } = response.data;

      if (url) {
        window.location.href = url;
      } else if (type === "Basic" && message) {
        alert(message);
      } else {
        alert("Failed to process the subscription.");
      }
    } catch (error) {
      console.error("Error submitting subscription:", error);
      alert("An error occurred while processing your subscription.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-[#292828]">
      <h1 className="text-3xl font-bold mb-8 text-center text-white">
        Our Pricing Plans
      </h1>

      {isLoading && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="w-12 h-12 border-4 border-t-4 border-gray-600 rounded-full animate-spin"></div>
        </div>
      )}

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
              <p className="ml-2 text-white">Send up to 50 emails/mo</p>
            </div>
          </div>
          <div className="flex justify-center mt-auto">
            <button
              onClick={() => handleSubmit("Basic")}
              className="bg-[#FFFFFF] text-[#141313] font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-pink-600 transition duration-300 w-full max-w-[150px]"
            >
              Subscribe
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
              <p className="ml-2 text-white">Send up to 50 - 250 emails/mo</p>
            </div>
          </div>
          <div className="flex justify-center mt-auto">
            <button
              onClick={() => handleSubmit("Seasoned Pro")}
              className="bg-[#FFFFFF] text-[#141313] font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-pink-600 transition duration-300 w-full max-w-[150px]"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Plan 3 */}
        <div className="group border rounded-lg shadow-md p-6 text-left bg-[#292828] hover:bg-[#4cded4] transition-colors duration-300 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Pro</h2>
            <p className="text-white mb-4">For 3-5 clients</p>
            <h3 className="text-2xl text-white font-bold mb-4">$100/Month</h3>
            <div className="flex items-center text-white mb-4">
              <FaCheckCircle className="text-white text-xl" />
              <p className="ml-2 text-white">Send up to 250+ emails/mo</p>
            </div>
          </div>
          <div className="flex justify-center mt-auto">
            <button
              onClick={() => handleSubmit("Pro")}
              className="bg-[#FFFFFF] text-[#141313] font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-pink-600 transition duration-300 w-full max-w-[150px]"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
