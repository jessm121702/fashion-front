import React, { useContext } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { AuthContext } from "../context/AuthContext";
import SheetUploadForm from "../component/SheetUploadForm";

const MyPortal = () => {
  const { userData, isAuthenticated } = useContext(AuthContext);

  return (
    <div>
      <Navbar />
      {isAuthenticated ? (
        <SheetUploadForm email={userData.email} />
      ) : (
        <p>Loading...</p>
      )}
      <Footer />
    </div>
  );
};

export default MyPortal;
