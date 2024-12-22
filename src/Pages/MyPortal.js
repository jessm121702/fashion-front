import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import OurPortal from "../component/OurPortal";
import SheetUploadForm from "../component/SheetUploadForm";
import axios from "axios";

const MyPortal = () => {
  const location = useLocation();
  const navigate = useNavigate();
   const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({ email: null, subId: null });

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const email = queryParams.get("email");
    const subId = queryParams.get("sub_id");

    console.log("🦀 Query Parameters:", { email, subId });

    const checkSubscription = async () => {
      try {
        setIsLoading(true);
        const response = await axios.post("http://localhost:3001/user/checkSubscription", { email, sub_id: subId });
        if (response.status === 200) {
          console.log("✅ Subscription is valid:", response.data);
          setUserData({ email, subId });
          setIsLoading(false);
        }
      } catch (error) {
        console.error("❌ Error checking subscription:", error);
        setIsLoading(false);
        navigate("/");
      }
    };

    if (email && subId) {
      checkSubscription();
    } else {
      setIsLoading(false);
      console.warn("⚠️ Missing email or subId. Redirecting to home.");
      navigate("/");
    }
  }, [location, navigate]);

  return (
    <div>
       {isLoading && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="w-12 h-12 border-4 border-t-4 border-pink-500 rounded-full animate-spin"></div>
        </div>
      )}
      <Navbar />
      <OurPortal />
      {userData.email && userData.subId ? (
        <SheetUploadForm email={userData.email} />
      ) : (
        <p>Loading...</p>
      )}
      <Footer />
    </div>
  );
};

export default MyPortal;
