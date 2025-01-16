import React, { useState } from "react";
import axios from "axios";

const SubscriptionForm = () => {

  const [email, setEmail] = useState("");
  const [subscriptionType, setSubscriptionType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !subscriptionType) {
      alert("Please fill in the required fields.");
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post("https://fashion-back-ytsh.onrender.com/user/Subscription", {
        email,
        subscriptionType,
      });

      const { url, message } = response.data;

      if (url) {
        window.location.href = url;
      } else if (subscriptionType === "Basic" && message) {
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
    <div className="flex justify-center items-center min-h-screen bg-[#dcd8d4] pb-12 ">
      {isLoading && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="w-12 h-12 border-4 border-t-4 text-gray-600 rounded-full animate-spin"></div>
        </div>
      )}
      <div className="bg-[#D9D9D9] shadow-lg  rounded-lg p-8 w-full max-w-md lg:max-w-2xl  border border-[#000000]">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Fill Your Form Now
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4 mb-6">
            <input
              type="text"
              placeholder="First Name"
              className="w-full border border-[#000000] rounded-md p-2 focus:outline-none "
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border border-[#000000] rounded-md p-2 focus:outline-none "
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-[#000000] rounded-md p-2 focus:outline-none "
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="text-xs text-red-500">
              *{" "}
              <span className="text-[#857F7F]">
                This is the email that we will verify.
              </span>
            </p>
          </div>

          {/* Subscription Selection */}
          <h3 className="text-center font-medium mb-4">
            Select a subscription
          </h3>
          <div className="flex justify-between mb-6">
            <label className="flex items-center space-x-2">
              <input type="checkbox" value="Basic"
                onChange={(e) => setSubscriptionType(e.target.value)} />
              <span className="text-gray-600">Newbie on the street</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" value="Seasoned Pro"
                onChange={(e) => setSubscriptionType(e.target.value)} />
              <span className="text-gray-600">Seasoned Professional</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" value="Pro"
                onChange={(e) => setSubscriptionType(e.target.value)} />
              <span className="text-gray-600">Pro</span>
            </label>
          </div>

          {/* Card Information */}
          <div className="space-y-4 mb-6">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full border border-[#000000] rounded-md p-2 focus:outline-none "
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Exp date"
                className="w-full border border-[#000000] rounded-md p-2 focus:outline-none "
              />
              <input
                type="text"
                placeholder="Security code"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
          </div>

          {/* Address */}
          <div className="space-y-4 mb-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-[#000000] rounded-md p-2 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Street Address"
              className="w-full border border-[#000000] rounded-md p-2 focus:outline-none "
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="City"
                className="w-full border border-[#000000] rounded-md p-2 focus:outline-none "
              />
              <input
                type="text"
                placeholder="State"
                className="w-full border border-[#000000] rounded-md p-2 focus:outline-none "
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Zip Code"
                className="w-full border border-[#000000] rounded-md p-2 focus:outline-none "
              />
              <input
                type="text"
                placeholder="Country"
                className="w-full border border-[#000000] rounded-md p-2 focus:outline-none "
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#151414] text-white font-semibold px-6 py-2 rounded hover:bg-pink-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionForm;
