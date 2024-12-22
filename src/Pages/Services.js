import React from "react";
import Navbar from "../component/Navbar";
import Service from "../component/Services";
import Footer from "../component/Footer";
import OurService from "../component/OurServices";
import PricingPlans from "../component/PricingPlans";

const Services = () => {
  return (
    <div>
      <Navbar />
      <OurService />
      <Service />
      <PricingPlans />
      <Footer />
    </div>
  );
};

export default Services;
