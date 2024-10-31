import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('/main.jpg')", backgroundAttachment: 'fixed' }}>
      {/* Navbar */}
      <Navbar />

      <div className="flex items-center justify-center min-h-screen pt-20">
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="relative z-10 p-8 bg-black bg-opacity-60 rounded-lg max-w-3xl w-full text-white shadow-lg text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Meet Our Team</h2>
          <p className="text-base md:text-lg mb-4">
            Our talented team of professionals is dedicated to bringing your vision to life.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">John Doe – Lead Editor</h3>
              <p>Specializing in video and photo editing with over 10 years of experience.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Jane Smith – Social Media Strategist</h3>
              <p>Expert in crafting impactful social media campaigns for diverse brands.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Sarah Lee – Content Creator</h3>
              <p>Creative writer and visual designer focused on engaging content.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TeamPage;
