import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import AboutUs from "./pages/About";         
import ContactPage from "./pages/Contact";   
import Services from "./pages/SelectServices"
import Form from "./pages/Form"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/form" element={<Form />} />
        <Route path="/aboutus" element={<AboutUs />} />          
        <Route path="/contact" element={<ContactPage />} />   
      </Routes>
    </Router>
  );
};

export default App;