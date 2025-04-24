import React from "react";
import HeroSection from "../component/HeroSection";
import CallToAction from "../component/CallToAction";
import Services from "../component/Services";
import Footer from "../component/Footer";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <CallToAction />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
