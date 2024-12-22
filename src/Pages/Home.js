import React from "react";
import HeroSection from "../component/HeroSection";
import Navbar from "../component/Navbar";
import CallToAction from "../component/CallToAction";
import Services from "../component/Services";
import MyPortal from "../component/MyPortal";
import Faq from "../component/Faq";
import Footer from "../component/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CallToAction />
      <Services />
      <MyPortal />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
