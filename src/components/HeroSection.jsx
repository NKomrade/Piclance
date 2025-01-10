import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const TypingAnimation = ({
  text,
  className,
  duration = 100,
  delay = 0,
  startOnView = true
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (!startOnView) {
      const startTimeout = setTimeout(() => {
        setStarted(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setStarted(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, startOnView]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => clearInterval(typingEffect);
  }, [text, duration, started]);

  return (
    <motion.span
      ref={elementRef}
      className={`text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 inline-block min-w-[5ch] ${className}`}
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </motion.span>
  );
};

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
    <div className="relative min-h-screen overflow-hidden bg-zinc-900">
      <div className="absolute inset-0 flex flex-nowrap">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-16 lg:p-20 space-y-8 min-w-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block text-xs md:text-sm text-zinc-500 tracking-[0.2em] uppercase whitespace-nowrap"
            >
              Your media consultant
            </motion.span>
            <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-black leading-none whitespace-nowrap">
              <span className="text-white">PIC</span>
              <TypingAnimation 
                text="LANCE" 
                duration={150}
                delay={800}
                startOnView={true}
              />
            </h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-nowrap items-baseline gap-2"
            >
              <span className="text-xl sm:text-2xl md:text-xl lg:text-4xl font-bold text-white whitespace-nowrap">
                Your Vision
              </span>
              <span className="text-xl sm:text-2xl md:text-xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                Our Expertise
              </span>
            </motion.div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-sm sm:text-lg md:text-xl text-zinc-300 whitespace-wrap"
          >
            Seamlessly connect with top-tier editors for all your video, image, and graphic needs.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap gap-4"
          >
            <button className="group relative w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-black/20 translate-y-full transition-transform group-hover:translate-y-0" />
              <span className="relative text-white font-medium whitespace-nowrap">Get Started</span>
            </button>
            <button className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 border border-zinc-700 text-zinc-300 rounded-lg hover:bg-zinc-800 transition-colors whitespace-nowrap">
              Learn More
            </button>
          </motion.div>
        </div>

        {/* Right Section */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center items-center p-8 md:p-16 lg:p-20 min-w-0"
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;