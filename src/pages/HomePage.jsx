import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/Services';
import Problems from '../components/Problems';
import TestimonialsSection from '../components/Testimonials';
import FAQs from '../components/FAQs';
import Plans from '../components/plans';

const Homepage = () => {
  return (
    <div className="relative min-h-screen bg-zinc-900">
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        {/* Grid Background */}
        <div className="absolute inset-0 grid grid-cols-100 grid-rows-100 w-full h-full">
          <div className="border-gray-200 border-opacity-10"></div>
        </div>

        {/* Hero Section with Parallax */}
        <HeroSection />

        {/* Problems Section with Parallax */}
        <Problems />

        <ServicesSection />

        {/* Testimonials Section with Parallax */}
        <TestimonialsSection />

        <Plans/>

        <FAQs/>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;