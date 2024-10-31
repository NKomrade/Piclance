import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('/main.jpg')", backgroundAttachment: 'fixed' }}>
      {/* Navbar */}
      <Navbar />

      <div className="flex items-center justify-center min-h-screen pt-20">
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="relative z-10 p-8 bg-black bg-opacity-60 rounded-lg max-w-3xl w-full text-white shadow-lg text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Contact Us</h2>
          <p className="text-base md:text-lg mb-4">
            We'd love to hear from you! Whether you have a question or need assistance with our services, reach out to us.
          </p>
          <form className="space-y-4 text-left">
            <div>
              <label className="block text-sm font-semibold mb-2">Full Name</label>
              <input type="text" className="w-full px-4 py-2 rounded-md bg-black bg-opacity-80 text-gray-200 border border-gray-700 focus:outline-none focus:border-neutral-300 transition duration-300" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input type="email" className="w-full px-4 py-2 rounded-md bg-black bg-opacity-80 text-gray-200 border border-gray-700 focus:outline-none focus:border-neutral-300 transition duration-300" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea rows="4" className="w-full px-4 py-2 rounded-md bg-black bg-opacity-80 text-gray-200 border border-gray-700 focus:outline-none focus:border-neutral-300 transition duration-300"></textarea>
            </div>
            <button type="submit" className="w-full py-3 rounded-md bg-white hover:bg-black hover:text-white transition duration-300 font-bold text-black hover:shadow-lg transform hover:scale-105">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;