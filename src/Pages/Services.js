import React, { useContext } from "react";
import Footer from "../component/Footer";
import PricingPlans from "../component/PricingPlans";
import Navbar from "../component/Navbar";
import { AuthContext } from "../context/AuthContext";

const Services = () => {
  const { userData, isAuthenticated } = useContext(AuthContext);

  return (
    <div>
      <div className="bg-[#dcd8d4]">
        <Navbar />

        <div className="flex flex-col items-center justify-center mt-6 pb-8">
          <h1 className="text-4xl sm:text-2xl lg:text-5xl text-center font-bold text-[#1D2026]">
            What Do We Provide?
          </h1>
          <div className="flex flex-col items-center justify-center p-3 mt-2 mb-2">
            <h1 className="text-base sm:text-base lg:text-2xl font-bold text-[#171717]">
              Personalized Email Automation
            </h1>
            <p className="w-full max-w-[500px] text-[#525252]">
              Effortlessly send custom email blasts to multiple brands at once.
              Our dynamic email field automatically personalizes subject lines,
              ensuring every message feels tailored and professional.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-3">
            <h1 className="text-base sm:text-base lg:text-2xl font-bold text-[#171717]">
              Seamless Contact Management
            </h1>
            <p className="w-full max-w-[500px] text-[#525252]">
              Easily upload your market list via Excel or CSV files. Name or
              organize your data and integrate it into your campaigns with just
              a few clicks.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-3">
            <h1 className="text-base sm:text-base lg:text-2xl font-bold text-[#171717]">
              Streamlined Communication
            </h1>
            <p className="w-full max-w-[500px] text-[#525252]">
              Cut through the noise with a platform built exclusively for the
              styling industry. Ensure you maintain professionalism while
              simplifying every step of your outreach.
            </p>
          </div>
        </div>
      </div>

      {isAuthenticated ? (
        <PricingPlans email={userData.email} />
      ) : (
        <p className="text-center mt-6 text-gray-600">
          Please log in to view pricing plans.
        </p>
      )}
      <Footer />
    </div>
  );
};

export default Services;
