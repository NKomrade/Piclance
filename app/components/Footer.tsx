import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdHome, MdEmail, MdPhone } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-neutral-900 to-black text-gray-300 py-12 w-full">
      <div className="container mx-auto px-6 lg:px-10">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* About Us Section */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">PICLANCE</h2>
            <p className="text-sm mb-4">
              At PicLance, we specialize in delivering quality media services to help brands create meaningful connections. Our team ensures that every project exceeds expectations.
            </p>
            <p className="text-sm">&copy; {new Date().getFullYear()} PicLance. All rights reserved.</p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="hover:text-white">Home</Link>
              <Link href="/aboutus" className="hover:text-white">About</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </div>
          </div>

          {/* Popular Services Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Popular Services</h3>
            <div className="flex flex-col space-y-2">
              <a href="#video-editing" className="hover:text-white">Video Editing</a>
              <a href="#photo-editing" className="hover:text-white">Photo Editing</a>
              <a href="#social-media" className="hover:text-white">Social Media Management</a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
            <div className="flex flex-col space-y-2 items-center md:items-start">
              <div className="flex items-center space-x-2">
                <MdHome size={20} className="text-gray-400" />
                <span>Ghaziabad, Uttar Pradesh</span>
              </div>
              <div className="flex items-center space-x-2">
                <MdEmail size={20} className="text-gray-400" />
                <a href="mailto:support@piclance.com" className="hover:text-white">
                  support@piclance.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MdPhone size={20} className="text-gray-400" />
                <a href="tel:+919999439604" className="hover:text-white">
                  +91 99994 39604
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            {/* Privacy and Terms Links */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#privacy-policy" className="hover:text-white">Privacy Policy</a>
              <a href="#terms-of-service" className="hover:text-white">Terms of Service</a>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <FaFacebookF size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
