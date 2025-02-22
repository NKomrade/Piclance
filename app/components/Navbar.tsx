'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav className="bg-black bg-opacity-10 backdrop-blur-md text-white py-4 fixed w-full top-0 z-50 shadow-lg rounded-lg">
      <div className="mx-auto flex justify-between items-center px-4 max-w-screen-xl">
        {/* Brand Name on the Left */}
        <div className="text-2xl font-bold flex items-center space-x-2">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <div className="flex items-center gap-2 cursor-pointer">
              <Image src="/logo.png" alt="Piclance Logo" width={24} height={24} />
              <Image src="/PiclanceText.png" alt="Piclance" width={60} height={24} className="filter invert" />
            </div>
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg font-semibold">
          <Link href="/" className="hover:text-gray-300 transition duration-300">Home</Link>
          <Link href="/about" className="hover:text-gray-300 transition duration-300">About</Link>
          <Link href="/contact" className="hover:text-gray-300 transition duration-300">Contact</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-900 bg-opacity-40 backdrop-blur-md text-white px-6 py-4 rounded-lg mt-2 shadow-lg">
          <div className="flex flex-col space-y-4 justify-center items-center">
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-gray-300 transition duration-300">Home</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-gray-300 transition duration-300">About</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-gray-300 transition duration-300">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
