import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BackgroundBeams } from "../components/ui/backgroundbeams";
import { AnimatedTestimonials } from "../components/ui/animatedTestimonials";

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ["/aboutus.jpg", "/image-1.jpg", "/services.jpg"];

  const testimonials = [
    {
      name: "Sarah Chen",
      designation: "Marketing Director",
      quote: "PicLance transformed our social media presence completely. Their video editing is top-notch and the results have exceeded our expectations.",
      src: "/person1.jpeg"
    },
    {
      name: "Michael Rodriguez",
      designation: "Professional Photographer",
      quote: "The quality of photo editing and attention to detail is exceptional. Working with PicLance has elevated the quality of my portfolio significantly.",
      src: "/person2.jpeg"
    },
    {
      name: "Emma Thompson",
      designation: "Business Owner",
      quote: "Their social media management strategy has helped us double our engagement in just months. The team's creativity and expertise are unmatched.",
      src: "/person3.jpeg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#1A1A1A]">
      <BackgroundBeams className="fixed inset-0 z-0" />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <div className="flex min-h-screen">
          {/* Left Section */}
          <div className="flex items-center justify-start w-1/2 p-8">
            <h1 className="text-4xl font-bold text-white">
              PicLance - Your Media Service Platform
            </h1>
          </div>

          {/* Right Section with Carousel */}
          <div className="relative w-1/2 flex items-center justify-center">
            <div className="w-[600px] rounded-lg overflow-hidden shadow-lg border border-gray-300">
              <div className="relative w-400 h-[400px]">
                {slides.map((slide, index) => (
                  <img
                    key={index}
                    src={slide}
                    alt={`Slide ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="relative min-h-screen">
          <div className="flex flex-col items-center justify-center min-h-screen text-white px-4 md:px-12 py-16">
            <div className="w-full max-w-6xl bg-black/60 backdrop-blur-md p-8 md:p-12 rounded-md shadow-lg border border-gray-700">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8">
                OUR SERVICES
              </h1>
              <p className="text-lg md:text-xl text-center leading-relaxed mb-8 md:mb-12">
                At PicLance, we offer a comprehensive range of media services tailored to elevate your brand. From professional video and photo editing to custom social media management, our skilled team is here to help you make a lasting impact.
              </p>
              <div className="flex justify-center">
                <button className="px-8 py-3 rounded-md bg-white text-black font-semibold text-lg hover:bg-gray-200 transition-colors duration-300 shadow-md">
                  Learn More
                </button>
              </div>
            </div>

            {/* Service Cards */}
            <div className="container mx-auto mt-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group flex flex-col items-center bg-black/70 p-8 rounded-lg text-gray-200 h-full border border-cyan-500 transition-all hover:border-cyan-400
                  shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]">
                  <img src="/image-1.jpg" alt="Video Editing" className="w-full h-64 rounded-md object-cover mb-6" />
                  <h2 className="text-2xl font-bold mb-4 text-center text-cyan-400">VIDEO EDITING</h2>
                  <p className="text-base md:text-lg text-center">
                    Transform your raw footage into a polished and professional video that captivates your audience.
                  </p>
                </div>

                <div className="group flex flex-col items-center bg-black/70 p-8 rounded-lg text-gray-200 h-full border border-yellow-500 transition-all hover:border-yellow-400
                  shadow-[0_0_15px_rgba(234,239,44,0.3)] hover:shadow-[0_0_20px_rgba(234,239,44,0.6)]">
                  <img src="/image-2.jpg" alt="Photo Editing" className="w-full h-64 rounded-md object-cover mb-6" />
                  <h2 className="text-2xl font-bold mb-4 text-center text-yellow-400">PHOTO EDITING</h2> 
                  <p className="text-base md:text-lg text-center">
                    Enhance your images with professional retouching, color correction, and creative manipulation.
                  </p>
                </div>

                <div className="group flex flex-col items-center bg-black/70 p-8 rounded-lg text-gray-200 h-full border border-pink-500 transition-all hover:border-pink-400
                  shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]">
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
        {/* Testimonials Section */}
        <section >
          <div className="container mx-auto mt-10 mb-10">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8">
              What Our Clients Say
            </h2>
            <AnimatedTestimonials testimonials={testimonials} autoplay={false} />
          </div>
        </section>  

        <Footer />
      </div>
    </div>
  );
};

export default Homepage;