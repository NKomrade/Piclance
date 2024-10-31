import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('/main.jpg')", backgroundAttachment: 'fixed' }}>
      {/* Navbar */}
      <Navbar />
      
      <div className="flex items-center justify-center min-h-screen pt-20">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        
        <div className="relative z-10 p-8 bg-black bg-opacity-60 rounded-lg max-w-3xl w-full text-white shadow-lg text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Our Services</h2>
          <p className="text-base md:text-lg mb-4">
            At Piclance, we offer a variety of services tailored to meet the unique needs of our clients. 
            Our dedicated team specializes in:
          </p>
          <ul className="text-left list-disc list-inside space-y-2">
            <li>Video Editing – Transform your raw footage into captivating, professional videos.</li>
            <li>Photo Editing – Enhance and optimize your images for high-quality results.</li>
            <li>Social Media Management – Build your brand's online presence effectively.</li>
            <li>Custom Content Creation – From blogs to ad creatives, we've got you covered.</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServicesPage;
