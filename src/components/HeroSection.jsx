import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const slides = ["/aboutus.jpg", "/image-1.jpg", "/services.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);
    
    setIsLoaded(true);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full md:flex-1 flex flex-col justify-center p-8 md:p-16 lg:p-20 space-y-8">
          <div className="space-y-4">
            <span className={`inline-block text-xs md:text-sm text-zinc-500 tracking-[0.2em] uppercase whitespace-nowrap transform transition-all duration-700 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}>
              Your media consultant
            </span>
            <h1 className={`text-[70px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-black leading-none whitespace-nowrap transform transition-all duration-700 delay-300 ${
              isLoaded ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            }`}>
              <span className="text-white">PIC</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                LANCE
              </span>
            </h1>
            <div className={`flex flex-nowrap items-baseline gap-2 transform transition-all duration-700 delay-500 ${
              isLoaded ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            }`}>
              <span className="text-xl sm:text-2xl md:text-xl lg:text-4xl font-bold text-white whitespace-nowrap">
                Your Vision
              </span>
              <span className="text-xl sm:text-2xl md:text-xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                Our Expertise
              </span>
            </div>
          </div>
          <p className={`text-sm sm:text-lg md:text-xl text-zinc-300 whitespace-wrap transform transition-all duration-700 delay-700 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}>
            Seamlessly connect with top-tier editors for all your video, image, and graphic needs.
          </p>
          <div className={`flex flex-wrap gap-4 transform transition-all duration-700 delay-1000 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}>
            <button className="group relative w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-black/20 translate-y-full transition-transform group-hover:translate-y-0" />
              <span className="relative text-white font-medium whitespace-nowrap">Get Started</span>
            </button>
            <button className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 border border-zinc-700 text-zinc-300 rounded-lg hover:bg-zinc-800 transition-colors whitespace-nowrap">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Section - Carousel */}
        <div className={`w-full md:flex-1 flex justify-center items-center p-8 md:p-16 lg:p-20 transform transition-all duration-1000 delay-500 ${
          isLoaded ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
        }`}>
          <div className="relative w-full max-w-xl aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white">
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