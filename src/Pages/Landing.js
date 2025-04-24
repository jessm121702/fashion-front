import React from "react";
import bgImg from "../assests/bgimg.jpeg";
import { useNavigate } from "react-router-dom";

const Landing = () => {

  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center min-h-screen " style={{
      backgroundImage: `url(${bgImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6 animate-fadeIn">
          Welcome to Subscription Manager
        </h1>
        <p className="text-lg text-white mb-8 animate-fadeIn">
          Manage your subscriptions or send emails effortlessly.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            className="bg-[#151414] text-white font-semibold px-8 py-3 rounded hover:bg-pink-600 transition duration-300"
            onClick={() => { navigate('/services') }}
          >
            Manage My Subscription
          </button>
          <button
            className="bg-[#151414] text-white font-semibold px-8 py-3 rounded hover:bg-purple-600 transition duration-300"
            onClick={() => { navigate('/myportal') }}
          >
            Let’s Send Some Emails
          </button>
        </div>
      </div>
    </div>
  );
};
export default Landing;