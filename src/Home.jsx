import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ["/aboutus.jpg", "/image-1.jpg", "/services.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="container mx-auto px-4 flex items-center">
        <div className="w-full lg:w-1/2"> 
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block text-sm text-zinc-500 tracking-[0.3em] uppercase">
                Welcome to the future
              </span>
              <h1 className="text-4xl font-black leading-none md:text-6xl lg:text-8xl">
                <span className="text-white">PIC</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                  LANCE
                </span>
              </h1>
              <div className="flex gap-[12px] items-baseline">
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 tracking-[0.4em]">Your Vision</span>
                <span className="text-3xl font-bold text-white">Our Expertise</span>
              </div>
            </div>
            <p className="text-lg text-zinc-300 md:text-xl lg:text-2xl">
              Seamlessly connect with top-tier editors for all your video, image, and graphic needs.
            </p>
            <div className="space-x-[30px]">
              <button className="group relative w-64 h-16 md:w-80 md:h-20 lg:w-96 lg:h-24 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-black/20 translate-y-full transition-transform group-hover:translate-y-0" />
                <span className="relative text-white font-medium">Get Started</span>
              </button>
              <button className="w-64 h-16 md:w-80 md:h-20 lg:w-96 lg:h-24 border border-zinc-700 text-zinc-300 rounded-lg hover:bg-zinc-800 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center">
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