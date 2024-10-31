import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FiMenu, FiX } from "react-icons/fi"; // Import menu and close icons

const Navbar = () => {
  const navigate = useNavigate(); // Define navigate function
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling menu

  return (
    <nav className="bg-transparent text-white py-4 fixed w-full top-0 z-20 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        
        {/* Brand Name on the Left */}
        <div className="text-2xl font-bold">
          PICLANCE
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg font-semibold">
          <a href="/" className="hover:text-gray-400 transition duration-300">Home</a>
          <a href="/services" className="hover:text-gray-400 transition duration-300">Services</a>
          <a href="/team" className="hover:text-gray-400 transition duration-300">Team</a>
          <a href="/contact" className="hover:text-gray-400 transition duration-300">Contact</a>
        </div>

        {/* Log In and Register Buttons (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 rounded-md hover:bg-neutral-900 hover:bg-opacity-50 transition duration-300"
          >
            Log In
          </button>
          <button
            onClick={() => navigate("/register")}
            className="px-4 py-2 rounded-md text-black bg-white transition duration-300"
          >
            Register
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-80 text-white px-6 py-4">
          <div className="flex flex-col space-y-4">
            <a href="/" onClick={() => setMenuOpen(false)} className="hover:text-gray-400 transition duration-300">Home</a>
            <a href="/services" onClick={() => setMenuOpen(false)} className="hover:text-gray-400 transition duration-300">Services</a>
            <a href="/team" onClick={() => setMenuOpen(false)} className="hover:text-gray-400 transition duration-300">Team</a>
            <a href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-gray-400 transition duration-300">Contact</a>
            <button
              onClick={() => { navigate("/login"); setMenuOpen(false); }}
              className="w-full text-left px-4 py-2 mt-4 rounded-md hover:bg-neutral-900 hover:bg-opacity-50 transition duration-300"
            >
              Log In
            </button>
            <button
              onClick={() => { navigate("/register"); setMenuOpen(false); }}
              className="w-full text-left px-4 py-2 rounded-md text-black bg-white transition duration-300"
            >
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;