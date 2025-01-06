import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ["/aboutus.jpg", "/image-1.jpg", "/services.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 flex">
        <div className="w-1/2 p-20 mt-[90px]">
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="inline-block text-sm text-zinc-500 tracking-[0.3em] uppercase">
                Welcome to the future
              </span>
              <h1 className="text-[120px] font-black leading-none">
                <span className="text-white">PIC</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                  LANCE
                </span>
              </h1>
              <div className="flex gap-[12px] items-baseline">
                <span className="text-4xl font-bold text-white">Your Vision</span>
                <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 tracking-[0.4em]">Our Expertise</span>
              </div>
            </div>

            <p className="text-xl text-zinc-300">
              Seamlessly connect with top-tier editors for all your video, image, and graphic needs.
            </p>

            <div className="space-x-[30px]"> 
              <button className="group relative w-64 h-16 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-black/20 translate-y-full transition-transform group-hover:translate-y-0" />
                <span className="relative text-white font-medium">Get Started</span>
              </button>
              <button className="w-64 h-16 border border-zinc-700 text-zinc-300 rounded-lg hover:bg-zinc-800 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="w-1/2 p-16 flex items-center">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide}
                alt={`Slide ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/50 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;