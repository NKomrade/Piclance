import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      {/* Main Container with Fixed Background Image */}
      <div
        className="min-h-screen flex flex-col items-center bg-cover bg-center text-white pt-15 relative"
        style={{ backgroundImage: "url('/main.jpg')", backgroundAttachment: 'fixed' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Centered "OUR SERVICES" Section */}
        <div className="flex flex-col items-center justify-center flex-grow relative z-10 min-h-screen animate-fade-in px-4 md:px-0">
          <div className="bg-black bg-opacity-50 p-6 md:p-8 rounded-md max-w-5xl w-full text-center animate-float">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">OUR SERVICES</h1>
            <p className="text-base md:text-lg mb-8">
              At Piclance, we offer a wide range of media services tailored to meet your unique needs.
              Whether you're looking for video editing, photo editing, or social media management, our experienced team is here to help your brand shine.
            </p>
          </div>
        </div>

        {/* Scrollable Service Cards below the centered section */}
        <div className="flex flex-col items-center relative z-10 pb-10">
  
          {/* Video Editing Card */}
          <div className="flex flex-row items-center bg-black bg-opacity-50 p-4 md:p-6 rounded-lg max-w-4xl w-full text-gray-200 shadow-lg text-left mt-4 animate-float">
            <img src="/image-1.jpg" alt="Video Editing" className="w-16 h-16 md:w-24 md:h-24 mr-4 rounded-md object-cover" />
            <div className="text-left">
              <h2 className="text-lg md:text-2xl font-bold mb-2">VIDEO EDITING</h2>
              <p className="text-sm md:text-base">
                Transform your raw footage into a polished and professional video that captivates your
                audience. Our team of experts will handle everything from cuts to transitions, adding the
                perfect soundtrack and visual effects.
              </p>
            </div>
          </div>

          {/* Photo Editing Card */}
          <div className="flex flex-row items-center bg-black bg-opacity-50 p-4 md:p-6 rounded-lg max-w-4xl w-full text-gray-200 shadow-lg text-left mt-4 animate-float">
            <img src="/image-2.jpg" alt="Photo Editing" className="w-16 h-16 md:w-24 md:h-24 mr-4 rounded-md object-cover" />
            <div className="text-left">
              <h2 className="text-lg md:text-2xl font-bold mb-2">PHOTO EDITING</h2>
              <p className="text-sm md:text-base">
                Enhance your images with professional photo editing that captures your brand's essence. Our
                team provides high-quality retouching, color grading, and image optimization services.
              </p>
            </div>
          </div>

          {/* Social Media Management Card */}
          <div className="flex flex-row items-center bg-black bg-opacity-50 p-4 md:p-6 rounded-lg max-w-4xl w-full text-gray-200 shadow-lg text-left mt-4 animate-float">
            <img src="/image-5.jpg" alt="Social Media Management" className="w-16 h-16 md:w-24 md:h-24 mr-4 rounded-md object-cover" />
            <div className="text-left">
              <h2 className="text-lg md:text-2xl font-bold mb-2">SOCIAL MEDIA MANAGEMENT</h2>
              <p className="text-sm md:text-base">
                Engage with your audience effectively with our social media management services. We create
                strategies that resonate with your audience, increasing brand visibility and engagement.
              </p>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Homepage;