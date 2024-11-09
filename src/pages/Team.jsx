import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('/main.jpg')", backgroundAttachment: 'fixed' }}>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen pt-20 pb-20">
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Team Section */}
        <div className="relative z-10 p-8 bg-black bg-opacity-60 rounded-lg max-w-5xl w-full text-white shadow-lg text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-10">Meet Our Team</h2>
          <p className="text-lg md:text-xl mb-10">
            Our talented team of professionals is dedicated to bringing your vision to life. Each member brings unique skills to create impactful media.
          </p>

          {/* Team Member Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Team Member - John Doe */}
            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
              <img src="/Ansh.jpg" alt="John Doe" className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-blue-500" />
              <h3 className="text-xl font-semibold text-blue-200 mb-2">Ansh Sharma</h3>
              <p className="text-blue-400">Lead Editor</p>
              <p className="text-gray-300 text-sm mt-2">Specializing in video and photo editing with over 10 years of experience.</p>
              
              {/* Social Media Icons */}
              <div className="flex justify-center space-x-4 mt-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
                  <FaFacebookF size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                  <FaTwitter size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400">
                  <FaInstagram size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-600">
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>

            {/* Team Member - Jane Smith */}
            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
              <img src="/Raj.jpg" alt="Jane Smith" className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-red-500" />
              <h3 className="text-xl font-semibold text-red-200 mb-2">Raj Sharma</h3>
              <p className="text-red-400">Social Media Strategist</p>
              <p className="text-gray-300 text-sm mt-2">Expert in crafting impactful social media campaigns for diverse brands.</p>
              
              {/* Social Media Icons */}
              <div className="flex justify-center space-x-4 mt-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
                  <FaFacebookF size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                  <FaTwitter size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400">
                  <FaInstagram size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-600">
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>

            {/* Team Member - Sarah Lee */}
            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
              <img src="/Swastik.jpg" alt="Sarah Lee" className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-white" />
              <h3 className="text-xl font-semibold text-white mb-2">Swastik Aryan</h3>
              <p className="text-neutral-400">Content Creator</p>
              <p className="text-gray-300 text-sm mt-2">Creative writer and visual designer focused on engaging content.</p>
              
              {/* Social Media Icons */}
              <div className="flex justify-center space-x-4 mt-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
                  <FaFacebookF size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                  <FaTwitter size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400">
                  <FaInstagram size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-600">
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
};

export default TeamPage;