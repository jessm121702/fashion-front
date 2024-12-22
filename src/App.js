import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import MyPortal from "./Pages/MyPortal";
import FAQ from "./Pages/FAQ";
import Subscription from "./Pages/Subscription";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/myportal" element={<MyPortal />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/subscription" element={<Subscription />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
