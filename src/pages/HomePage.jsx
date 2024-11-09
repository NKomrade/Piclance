import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      {/* Main Container with Fixed Background Image */}
      <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('/main.jpg')", backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Centered "OUR SERVICES" Section */}
        <div className="flex flex-col items-center justify-center min-h-screen text-white px-4 md:px-12">
          <div className="w-full max-w-6xl bg-black bg-opacity-60 backdrop-blur-md p-8 md:p-12 rounded-md shadow-lg border border-gray-700 animate-fade-in">
    
            {/* Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8 animate-fade-in">
              OUR SERVICES
            </h1>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-center leading-relaxed mb-8 md:mb-12">
              At PicLance, we offer a comprehensive range of media services tailored to elevate your brand. From professional video and photo editing to custom social media management, our skilled team is here to help you make a lasting impact.
            </p>
            
            {/* Call to Action */}
            <div className="flex justify-center">
              <button className="px-8 py-3 rounded-md bg-white text-black font-semibold text-lg hover:bg-gray-200 transition duration-300 shadow-md">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Service Cards Section */}
        <div className="flex flex-col items-center relative z-10 pb-10 w-full px-4">
          
          {/* Card Container with Full-Width and Responsive Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            
            {/* Video Editing Card */}
            <div className="flex flex-col items-center bg-black bg-opacity-70 p-8 rounded-lg shadow-lg text-gray-200 animate-float w-full">
              <img src="/image-1.jpg" alt="Video Editing" className="w-full h-64 rounded-md object-cover mb-6" />
              <h2 className="text-2xl font-bold mb-4 text-center">VIDEO EDITING</h2>
              <p className="text-base md:text-lg text-center">
                Transform your raw footage into a polished and professional video that captivates your audience. Our team of experts will handle everything from cuts to transitions, adding the perfect soundtrack and visual effects.
              </p>
            </div>

            {/* Photo Editing Card */}
            <div className="flex flex-col items-center bg-black bg-opacity-70 p-8 rounded-lg shadow-lg text-gray-200 animate-float w-full">
              <img src="/image-2.jpg" alt="Photo Editing" className="w-full h-64 rounded-md object-cover mb-6" />
              <h2 className="text-2xl font-bold mb-4 text-center">PHOTO EDITING</h2>
              <p className="text-base md:text-lg text-center">
                Enhance your images with professional photo editing that captures your brand's essence. Our team provides high-quality retouching, color grading, and image optimization services.
              </p>
            </div>

            {/* Social Media Management Card */}
            <div className="flex flex-col items-center bg-black bg-opacity-70 p-8 rounded-lg shadow-lg text-gray-200 animate-float w-full">
              <img src="/image-5.jpg" alt="Social Media Management" className="w-full h-64 rounded-md object-cover mb-6" />
              <h2 className="text-2xl font-bold mb-4 text-center">SOCIAL MEDIA MANAGEMENT</h2>
              <p className="text-base md:text-lg text-center">
                Engage with your audience effectively with our social media management services. We create strategies that resonate with your audience, increasing brand visibility and engagement.
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