import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Import eye icons
import Navbar from "../components/Navbar"; // Import Navbar component

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('/main.jpg')", backgroundAttachment: 'fixed' }}>
    {/* Navbar */}
      <Navbar />

      <div className="flex items-center justify-center min-h-screen">
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Register Form */}
        <div className="relative z-10 p-8 bg-black bg-opacity-60 rounded-lg max-w-2xl w-full text-white shadow-lg mt-16">
          <h2 className="text-3xl font-extrabold text-center mb-6">Register</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Full Name Field */}
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-sm font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 rounded-md bg-black bg-opacity-80 text-gray-200 border border-gray-700 focus:outline-none focus:border-neutral-300 transition duration-300"
                  required
                />
              </div>

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
              <div className="mb-4 relative">
                <label htmlFor="password" className="block text-sm font-semibold mb-2">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 rounded-md bg-black bg-opacity-80 text-gray-200 border border-gray-700 focus:outline-none focus:border-neutral-300 transition duration-300"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-10 text-gray-400 hover:text-gray-200 transition duration-300"
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>

              {/* Age Group Field */}
              <div className="mb-4">
                <label htmlFor="ageGroup" className="block text-sm font-semibold mb-2">Age Group</label>
                <select
                  id="ageGroup"
                  className="w-full px-4 py-2 rounded-md bg-black bg-opacity-80 text-gray-200 border border-gray-700 focus:outline-none focus:border-neutral-300 transition duration-300"
                  required
                >
                  <option value="">Select Age Group</option>
                  <option value="11-18">11-18</option>
                  <option value="19-28">19-28</option>
                  <option value="29-50">29-50</option>
                  <option value="50+">50 and above</option>
                </select>
              </div>

              {/* Mobile Number Field */}
              <div className="mb-4">
                <label htmlFor="mobile" className="block text-sm font-semibold mb-2">Mobile Number</label>
                <input
                  type="tel"
                  id="mobile"
                  placeholder="+1 234 567 8901"
                  className="w-full px-4 py-2 rounded-md bg-black bg-opacity-80 text-gray-200 border border-gray-700 focus:outline-none focus:border-neutral-300 transition duration-300"
                  required
                />
              </div>

              {/* Role Field */}
              <div className="mb-4">
                <label htmlFor="role" className="block text-sm font-semibold mb-2">Select Your Role</label>
                <select
                  id="role"
                  className="w-full px-4 py-2 rounded-md bg-black bg-opacity-80 text-gray-200 border border-gray-700 focus:outline-none focus:border-neutral-300 transition duration-300"
                  required
                >
                  <option value="">Select Role</option>
                  <option value="Recipient">Recipient</option>
                  <option value="Editor">Editor</option>
                </select>
              </div>

              {/* Profession Field */}
              <div className="mb-4 md:col-span-2">
                <label htmlFor="profession" className="block text-sm font-semibold mb-2">Profession</label>
                <input
                  type="text"
                  id="profession"
                  placeholder="Enter your profession"
                  className="w-full px-4 py-2 rounded-md bg-black bg-opacity-80 text-gray-200 border border-gray-700 focus:outline-none focus:border-neutral-300 transition duration-300"
                  required
                />
              </div>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full py-3 mt-6 rounded-md bg-white hover:bg-black hover:text-white transition duration-300 font-bold text-black hover:shadow-lg transform hover:scale-105"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;