import React, { useRef, useState } from "react";

const Homepage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const homeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const servicesRef = useRef(null);
  const workRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu after clicking a section on mobile
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-900 text-white py-4 px-6 fixed w-full top-0 z-20 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold flex items-center">
            <img src="/piclance.png" alt="Piclance Logo" className="w-8 h-8 mr-2" />
            PICLANCE
          </div>

          {/* Hamburger Icon for mobile */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-lg">
            <li>
              <button
                onClick={() => scrollToSection(homeRef)}
                className="hover:text-blue-400 transition duration-300"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(aboutUsRef)}
                className="hover:text-blue-400 transition duration-300"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(servicesRef)}
                className="hover:text-blue-400 transition duration-300"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(workRef)}
                className="hover:text-blue-400 transition duration-300"
              >
                Work
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(teamRef)}
                className="hover:text-blue-400 transition duration-300"
              >
                Team
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="hover:text-blue-400 transition duration-300"
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Login Button (hidden on mobile) */}
          <div className="hidden md:block">
            <button className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-lg shadow transition duration-300">
              Log In
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden bg-blue-900 text-white text-lg space-y-4 p-4">
            <li>
              <button
                onClick={() => scrollToSection(homeRef)}
                className="block w-full text-left hover:text-blue-400 transition duration-300"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(aboutUsRef)}
                className="block w-full text-left hover:text-blue-400 transition duration-300"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(servicesRef)}
                className="block w-full text-left hover:text-blue-400 transition duration-300"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(workRef)}
                className="block w-full text-left hover:text-blue-400 transition duration-300"
              >
                Work
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(teamRef)}
                className="block w-full text-left hover:text-blue-400 transition duration-300"
              >
                Team
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="block w-full text-left hover:text-blue-400 transition duration-300"
              >
                Contact
              </button>
            </li>
            <li>
              <button className="block w-full bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-lg shadow transition duration-300">
                Log In
              </button>
            </li>
          </ul>
        )}
      </nav>

      {/* Sections */}
      <div className="pt-16"> {/* Offset for fixed Navbar */}
        
        {/* Home Section */}
        <section
          ref={homeRef}
          className="h-screen bg-cover bg-center relative"
          style={{ backgroundImage: "url('/Home.jpg')", backgroundAttachment: 'fixed' }}
        >
          <div className="absolute inset-0 bg-neutral-900 opacity-70"></div>
          <div className="relative z-10 text-center flex flex-col items-center justify-center h-full text-white px-4 md:px-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">MAKING CONNECTIONS</h1>
            <h1 className="text-4xl md:text-6xl font-bold">DELIVERING RESULTS</h1>
            <p className="mt-4 text-lg md:text-xl">BUILDING YOUR SOCIAL BRAND</p>
          </div>
        </section>

        {/* About Us Section */}
        <section
          ref={aboutUsRef}
          className="h-screen bg-cover bg-center relative"
          style={{ backgroundImage: "url('/aboutus.jpg')", backgroundAttachment: 'fixed' }}
        >
          <div className="absolute inset-0 bg-neutral-900 opacity-60"></div>
          <div className="relative z-10 text-center flex flex-col items-center justify-center h-full text-white px-4 md:px-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Us</h2>
            <p className="max-w-2xl text-lg">We are a dedicated team committed to providing the best solutions to meet your needs. Our mission is to ensure excellence in every service we provide.</p>
          </div>
        </section>

        {/* Services Section */}
        <section
          ref={servicesRef}
          className="h-screen bg-cover bg-center relative"
          style={{ backgroundImage: "url('/services.jpg')", backgroundAttachment: 'fixed' }}
        >
          <div className="absolute inset-0 bg-neutral-700 opacity-60"></div>
          <div className="relative z-10 text-center flex flex-col items-center justify-center h-full text-white px-4 md:px-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="max-w-2xl text-lg">We offer a wide range of services designed to meet the unique needs of our clients. Whether you're looking for consulting or full-scale project implementation, we have you covered.</p>
          </div>
        </section>

        {/* Work Section */}
        <section
          ref={workRef}
          className="h-screen bg-cover bg-center relative"
          style={{ backgroundImage: "url('/work.jpg')", backgroundAttachment: 'fixed' }}
        >
          <div className="absolute inset-0 bg-neutral-900 opacity-70"></div>
          <div className="relative z-10 text-center flex flex-col items-center justify-center h-full text-white px-4 md:px-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h2>
            <p className="max-w-2xl text-lg">Over the years, we’ve worked on numerous projects, consistently delivering results that exceed expectations. Take a look at some of the amazing work we've done.</p>
          </div>
        </section>

        {/* Team Section */}
        <section
          ref={teamRef}
          className="h-screen bg-cover bg-center relative"
          style={{ backgroundImage: "url('/team.jpg')", backgroundAttachment: 'fixed' }}
        >
          <div className="absolute inset-0 bg-neutral-900 opacity-70"></div>
          <div className="relative z-10 text-center flex flex-col items-center justify-center h-full text-white px-4 md:px-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
            <p className="max-w-2xl text-lg">Our team consists of experienced professionals dedicated to your success. Together, we bring innovative solutions to life.</p>
          </div>
        </section>

        <section
          ref={contactRef}
          className="min-h-screen bg-cover bg-center relative"
        >
          <div className="absolute inset-0 opacity-70"></div>
          <div className="relative z-10 container mx-auto p-10 md:py-16 py-12 flex flex-wrap justify-between px-4 md:px-0">
            {/* Contact Form */}
            <div className="w-full md:w-7/12 mb-8">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 mt-20 pl-6">GET IN TOUCH</h2>
              <form className="space-y-4 pl-6">
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">First Name *</label>
                  <input type="text" className="border border-gray-400 rounded-md p-3" placeholder="First Name" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">Last Name *</label>
                  <input type="text" className="border border-gray-400 rounded-md p-3" placeholder="Last Name" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">Email *</label>
                  <input type="email" className="border border-gray-400 rounded-md p-3" placeholder="Email" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">Subject</label>
                  <input type="text" className="border border-gray-400 rounded-md p-3" placeholder="Subject" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">Enter Your Message</label>
                  <textarea className="border border-gray-400 rounded-md p-3" rows="5" placeholder="Enter your message"></textarea>
                </div>
                <button className="mt-4 bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-md shadow transition duration-300">
                  Submit
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="w-full md:w-4/12 flex flex-col justify-center text-neutral-900">
              <h3 className="text-xl font-bold mb-4">We can't wait to hear from you</h3>
              <p className="text-lg">
                500 Terry Francine Street, <br />
                San Francisco, <br />
                CA 94158
              </p>
              <p className="mt-4 text-lg">
                <a href="mailto:info@mysite.com" className="text-blue-400">piclancepvt@gmail.com</a><br />
                9999439604
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;