import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import LoginPage from "./pages/Login";
import Register from "./pages/Register";
import ServicesPage from "./pages/Services"; // Import ServicesPage
import TeamPage from "./pages/Team";         // Import TeamPage
import ContactPage from "./pages/Contact";   // Import ContactPage

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/services" element={<ServicesPage />} /> 
        <Route path="/team" element={<TeamPage />} />          
        <Route path="/contact" element={<ContactPage />} />   
      </Routes>
    </Router>
  );
};

export default App;