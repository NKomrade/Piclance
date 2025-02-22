import React from "react";
import GlassyCards from "@/app/components/ui/cards";

const ServicesSection = () => {
  return (
    <div className="relative min-h-screen bg-zinc-900 flex items-center overflow-hidden">
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 gap-8">
        {/* Left Flex - Heading and Subheading */}
        <div className="flex flex-col justify-center w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-5xl font-extrabold mb-8">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Our Services
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            Explore a range of professional services designed to elevate your
            projects to the next level. Let us help you achieve your goals with
            creativity and expertise.
          </p>
        </div>

        {/* Right Flex - GlassyCards Marquee */}
        <div className="w-full md:w-1/2">
          <div className="w-full overflow-hidden">
            <GlassyCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;