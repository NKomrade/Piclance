import React from "react";
import GlassyCards from "../components/ui/GlassyCards";

const ServicesSection = () => {
  return (
    <div className="relative min-h-screen">
      <div className="flex flex-col items-center justify-center min-h-screen text-white px-4 md:px-12 py-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8">
          OUR SERVICES
        </h1>
        <div>
          <GlassyCards />
        </div>
        <div className="container mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group flex flex-col items-center bg-black/70 p-8 rounded-lg text-gray-200 h-full border border-cyan-500 transition-all hover:border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]">
              <img src="/image-1.jpg" alt="Video Editing" className="w-full h-64 rounded-md object-cover mb-6" />
              <h2 className="text-2xl font-bold mb-4 text-center text-cyan-400">VIDEO EDITING</h2>
              <p className="text-base md:text-lg text-center">
                Transform your raw footage into a polished and professional video that captivates your audience.
              </p>
            </div>
            <div className="group flex flex-col items-center bg-black/70 p-8 rounded-lg text-gray-200 h-full border border-yellow-500 transition-all hover:border-yellow-400 shadow-[0_0_15px_rgba(234,239,44,0.3)] hover:shadow-[0_0_20px_rgba(234,239,44,0.6)]">
              <img src="/image-2.jpg" alt="Photo Editing" className="w-full h-64 rounded-md object-cover mb-6" />
              <h2 className="text-2xl font-bold mb-4 text-center text-yellow-400">PHOTO EDITING</h2> 
              <p className="text-base md:text-lg text-center">
                Enhance your images with professional retouching, color correction, and creative manipulation.
              </p>
            </div>
            <div className="group flex flex-col items-center bg-black/70 p-8 rounded-lg text-gray-200 h-full border border-pink-500 transition-all hover:border-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]">
              <img src="/image-5.jpg" alt="Social Media Management" className="w-full h-64 rounded-md object-cover mb-6" />
              <h2 className="text-2xl font-bold mb-4 text-center text-pink-400">SOCIAL MEDIA MANAGEMENT</h2>
              <p className="text-base md:text-lg text-center">
                Let us manage your social media presence, creating engaging content, scheduling posts, and growing your online community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;