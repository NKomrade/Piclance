import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-90 text-gray-300 py-8 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-white">PICLANCE</h2>
            <p className="text-sm mt-1">Building connections, delivering results</p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 text-sm mt-4 md:mt-0">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>

        {/* Contact and Social Media */}
        <div className="mt-6 flex flex-col md:flex-row md:justify-between items-center">
          {/* Contact Information */}
          <div className="text-center md:text-left">
            <p>500 Terry Francine St, San Francisco, CA 94158</p>
            <p>Phone: <a href="tel:+1234567890" className="text-blue-400 hover:underline">+1 234 567 890</a></p>
            <p>Email: <a href="mailto:info@piclance.com" className="text-blue-400 hover:underline">info@piclance.com</a></p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 flex items-center space-x-2">
              <FaFacebookF size={20} />
              <span>Facebook</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 flex items-center space-x-2">
              <FaTwitter size={20} />
              <span>Twitter</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 flex items-center space-x-2">
              <FaInstagram size={20} />
              <span>Instagram</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 flex items-center space-x-2">
              <FaLinkedinIn size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Piclance. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;