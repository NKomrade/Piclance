import React from 'react';
import HeroSection from '@/app/Home/HeroSection';
import ServicesSection from '@/app/Home/Services';
import Problems from '@/app/Home/Problems';
import TestimonialsSection from '@/app/Home/Testimonials';
import FAQs from '@/app/Home/FAQs';
import Plans from '@/app/Home/Plans';

const Homepage = () => {
  return (
    <div className="relative min-h-screen scrollbar-hide">
      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="absolute inset-0 grid grid-cols-100 grid-rows-100 w-full h-full">
          <div className="border-gray-200 border-opacity-10"></div>
        </div>

        <HeroSection />

        <Problems />

        <ServicesSection />

        <Plans/>

        <TestimonialsSection />

        <div className="h-[750px]">
          <FAQs/>
        </div>
        
      </div>
    </div>
  );
};

export default Homepage;