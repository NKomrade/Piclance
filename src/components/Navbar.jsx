import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black bg-opacity-10 backdrop-blur-md text-white py-4 fixed w-full top-0 z-20 shadow-lg rounded-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        
        {/* Brand Name on the Left */}
        <div className="text-2xl font-bold flex items-center space-x-2">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <div className="flex items-center gap-2"> 
              <img src="/logo.png" alt="Piclance Logo" className="w-6 h-6" />
              <img src="/PiclanceText.png" alt="Piclance" className="w-15 h-6 filter invert"/>
            </div>
          </Link>
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
          <Link to="/" className="hover:text-gray-300 transition duration-300">Home</Link>
          <Link to="/team" className="hover:text-gray-300 transition duration-300">Team</Link>
          <Link to="/contact" className="hover:text-gray-300 transition duration-300">Contact</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white bg-opacity-20 backdrop-blur-md text-white px-6 py-4 rounded-lg mt-2 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-gray-300 transition duration-300">Home</Link>
            <Link to="/team" onClick={() => setMenuOpen(false)} className="hover:text-gray-300 transition duration-300">Team</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-gray-300 transition duration-300">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
