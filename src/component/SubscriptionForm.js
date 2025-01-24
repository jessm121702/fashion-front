import React, { useState } from "react";

const SubscriptionForm = () => {

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#dcd8d4] pb-12 ">
      <div className="bg-[#D9D9D9] shadow-lg  rounded-lg p-8 w-full max-w-md lg:max-w-2xl  border border-[#000000]">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Fill Your Form Now
        </h2>

        <form >
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
            />
            <p className="text-xs text-red-500">
              *{" "}
              <span className="text-[#857F7F]">
                This is the email that we will verify.
              </span>
            </p>
            {/* Additional Text Field */}
            <textarea
              placeholder="Tell us more about yourself"
              className="w-full border border-[#000000] rounded-md p-2 focus:outline-none"
              rows="4"
            ></textarea>
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
