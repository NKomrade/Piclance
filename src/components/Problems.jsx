import React from "react";
import { FaEyeSlash, FaClock, FaStar, FaWrench, FaCommentAlt, FaDollarSign } from "react-icons/fa";

const Problems = () => {
  return (
    <div className="problem-section py-32 bg-gradient-to-b from-zinc-800 to-zinc-900"> 
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-white text-center mb-8">PROBLEMS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border border-gray-700 border-opacity-50 rounded-lg p-6 flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105">
            <div className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center mb-4 hover:bg-indigo-500 transition-all duration-300">
              <FaEyeSlash size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-medium mb-2 text-white">Lack of Access to Professional Editors</h3>
            <p className="text-gray-400 text-center">Struggling to find skilled editors for your projects?</p>
          </div>
          <div className="border border-gray-700 border-opacity-50 rounded-lg p-6 flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105">
            <div className="w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center mb-4 hover:bg-purple-500 transition-all duration-300">
              <FaClock size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-medium mb-2 text-white">Time-Consuming Editing Process</h3>
            <p className="text-gray-400 text-center">Spending too much time editing instead of focusing on core tasks?</p>
          </div>
          <div className="border border-gray-700 border-opacity-50 rounded-lg p-6 flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105">
            <div className="w-20 h-20 rounded-full bg-pink-600 flex items-center justify-center mb-4 hover:bg-pink-500 transition-all duration-300">
              <FaStar size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-medium mb-2 text-white">Inconsistent Quality and Reliability</h3>
            <p className="text-gray-400 text-center">Uncertain about the quality and consistency of your edits?</p>
          </div>
          <div className="border border-gray-700 border-opacity-50 rounded-lg p-6 flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105">
            <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center mb-4 hover:bg-red-500 transition-all duration-300">
              <FaWrench size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-medium mb-2 text-white">Limited Tools and Expertise</h3>
            <p className="text-gray-400 text-center">Lacking the necessary tools and expertise for professional editing?</p>
          </div>
          <div className="border border-gray-700 border-opacity-50 rounded-lg p-6 flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105">
            <div className="w-20 h-20 rounded-full bg-orange-900 flex items-center justify-center mb-4 hover:bg-orange-800 transition-all duration-300">
              <FaCommentAlt size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-medium mb-2 text-white">Scattered Social Media Management</h3>
            <p className="text-gray-400 text-center">Wasting time managing edits across multiple social media platforms?</p>
          </div>
          <div className="border border-gray-700 border-opacity-50 rounded-lg p-6 flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105">
            <div className="w-20 h-20 rounded-full bg-teal-600 flex items-center justify-center mb-4 hover:bg-teal-500 transition-all duration-300">
              <FaDollarSign size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-medium mb-2 text-white">Budget Constraints for Professional Editing</h3>
            <p className="text-gray-400 text-center">Finding professional editing services too expensive?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problems;