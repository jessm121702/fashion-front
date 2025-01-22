import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import MyPortal from "./Pages/MyPortal";
import FAQ from "./Pages/FAQ";
import Subscription from "./Pages/Subscription";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/myportal" element={<ProtectedRoute><MyPortal /></ProtectedRoute>} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
