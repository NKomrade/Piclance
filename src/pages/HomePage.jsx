import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/Home/HeroSection';
import ServicesSection from '../components/Home/Services';
import Problems from '../components/Home/Problems';
import TestimonialsSection from '../components/Home/Testimonials';
import FAQs from '../components/Home/FAQs';
import Plans from '../components/Home/plans';

const Homepage = () => {
  return (
    <div className="relative min-h-screen bg-zinc-900 scrollbar-hide">
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <div className="absolute inset-0 grid grid-cols-100 grid-rows-100 w-full h-full">
          <div className="border-gray-200 border-opacity-10"></div>
        </div>

        <HeroSection />

        <Problems />

        <ServicesSection />

        <Plans/>

        <TestimonialsSection />

        <div className="h-[750px] bg-gradient-to-r from-zinc-800 to-transparent">
          <FAQs/>
        </div>
        
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;