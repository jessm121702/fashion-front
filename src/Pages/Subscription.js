import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import OurService from "../component/OurSubscription";
import SubscriptionForm from "../component/SubscriptionForm";

const Subscription = () => {
  return (
    <div>
      <Navbar />
      <OurService />
      <SubscriptionForm />
      <Footer />
    </div>
  );
};

export default Subscription;
