import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Navbar = () => {
  const navigate = useNavigate(); // Define navigate function

  return (
    <nav className="bg-transparent text-white py-4 fixed w-full top-0 z-20 flex items-start">
      {/* Brand Name on the Left */}
      <div className="text-2xl font-bold ml-8 mt-2">
        PICLANCE
      </div>

      {/* Centered Menu Items, slightly shifted down */}
      <div className="flex-grow">
        <div className="flex justify-center space-x-8 text-lg font-semibold mt-4">
          <a href="/" className="hover:text-gray-400 transition duration-300">Home</a>
          <a href="/services" className="hover:text-gray-400 transition duration-300">Services</a>
          <a href="/team" className="hover:text-gray-400 transition duration-300">Team</a>
          <a href="/contact" className="hover:text-gray-400 transition duration-300">Contact</a>
        </div>
      </div>

      {/* Log In and Sign Up Buttons */}
      <div className="flex items-center space-x-4 mr-8 mt-2">
        <button
          onClick={() => navigate("/login")} // Use navigate to go to login
          className="px-4 py-2 rounded-md hover:bg-neutral-900 hover:bg-opacity-50 transition duration-300"
        >
          Log In
        </button>
        <button
          onClick={() => navigate("/register")} // Optional: Set up registration navigation
          className="px-4 py-2 rounded-md text-black bg-white transition duration-300"
        >
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;