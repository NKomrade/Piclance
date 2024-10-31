import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Import eye icons
import Navbar from "../components/Navbar"; // Import Navbar component

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('/main.jpg')", backgroundAttachment: 'fixed' }}>
      {/* Navbar */}
      <Navbar />

      <div className="flex items-center justify-center min-h-screen">
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Login Form */}
        <div className="relative z-10 p-8 bg-black bg-opacity-60 rounded-lg max-w-md w-full text-white shadow-lg mt-16">
          <h2 className="text-3xl font-extrabold text-center mb-6">Log In</h2>
          <form>
            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-black bg-opacity-80 text-gray-200 border border-gray-700 focus:outline-none focus:border-neutral-300 transition duration-300"
                required
              />
            </div>

            {/* Password Field with Toggle */}
            <div className="mb-6 relative">
              <label htmlFor="password" className="block text-sm font-semibold mb-2">Password</label>
              <input
                type={showPassword ? "text" : "password"} // Toggle between text and password
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 rounded-md bg-black bg-opacity-80 text-gray-200 border border-gray-700 focus:outline-none focus:border-neutral-300 transition duration-300"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
                className="absolute right-3 top-10 text-gray-400 hover:text-gray-200 transition duration-300"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-md bg-white hover:bg-black hover:text-white transition duration-300 font-bold text-black hover:shadow-lg transform hover:scale-105"
            >
              Log In
            </button>

            {/* Forgot Password and Signup Links */}
            <div className="mt-6 flex justify-between text-sm">
              <a href="#" className="text-white hover:underline">Forgot Password?</a>
              <a href="/register" className="text-white hover:underline">Sign Up</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;