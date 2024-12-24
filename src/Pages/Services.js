import React from "react";
import Footer from "../component/Footer";
import PricingPlans from "../component/PricingPlans";
import Navbar from "../component/Navbar";
const Services = () => {
  return (
    <div>
      <div className="bg-[#dcd8d4]">
        <Navbar />

        <div className="flex flex-col items-center justify-center  mt-6 pb-8 ">
          <h1 className="text-4xl sm:text-2xl lg:text-5xl text-center font-bold text-[#1D2026]">
            What Do We Provide?
          </h1>
          <div className="flex flex-col items-center justify-center p-3  mt-2 mb-2">
            <h1 className="text-base sm:text-base lg:text-2xl font-bold text-[#171717]">
              Personalized Email Automation
            </h1>
            <p className="w-full max-w-[500px] text-[#525252]">
              Effortlesly send custom email blast to the multiple brands at
              once. Our dynamic email field automatically Personalize subject
              lines, ensuring every message feels tailored & Professional.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-3">
            <h1 className="text-base sm:text-base lg:text-2xl font-bold text-[#171717]">
              Seamless Contact Managment
            </h1>
            <p className="w-full max-w-[500px] text-[#525252]">
              Easy upload your market list via excel or CSV files. Name or
              organize your data and integrates it into your compaigns with just
              a few clicks.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-3">
            <h1 className="text-base sm:text-base lg:text-2xl font-bold text-[#171717]">
              Streamlined Communication
            </h1>
            <p className="w-full max-w-[500px] text-[#525252]">
              Cut Through the noise with a platform build exclusively for the
              styling industry. Name ensure you maintain professionalism while
              simplifying every step of your outreach.
            </p>
          </div>
        </div>
      </div>
      <PricingPlans />
      <Footer />
    </div>
  );
};

export default Services;
