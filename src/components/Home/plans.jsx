import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const ServicesSection = () => {
  // Sample service images - replace with your actual image paths
  const serviceImages = [
    { src: '/Services/vid-edit.png', alt: 'Video Editing', category: 'Video Production' },
    { src: '/Services/web.png', alt: 'Web Development', category: 'Development' },
    { src: '/Services/graphic.png', alt: 'Graphic Design', category: 'Design' },
    { src: '/Services/wedding.png', alt: 'Wedding Cards', category: 'Invitation' }
  ];

  const howToSteps = [
    {
      title: "Select Required Services",
      description: "Select from our wide range of professional services tailored to your needs"
    },
    {
      title: "Fill Your Details",
      description: "Tell us about your project requirements and creative goals"
    },
    {
      title: "Converse With Our Executive",
      description: "We'll match you with the perfect expert for your project"
    },
    {
      title: "Enjoy Discounts",
      description: "Monitor your project's development with real-time updates"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-zinc-800 to-transparent py-20 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Select the services you want
            </span>
          </motion.h2>
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/services"
              className="group relative w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg overflow-hidden flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-black/20 translate-y-full transition-transform group-hover:translate-y-0"></div>
              <span className="relative text-white font-medium whitespace-nowrap">Select Services</span>
            </Link>
          </motion.button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section - Service Images */}
          <div className="grid grid-cols-2 gap-4">
            {serviceImages.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img 
                    src={service.src} 
                    alt={service.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-semibold text-lg">{service.alt}</h3>
                      <p className="text-sm text-gray-300">{service.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Section - How To */}
          <div className="space-y-8">
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white mb-8"
            >
              How It Works
            </motion.h3>
            <div className="space-y-6">
              {howToSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-12 border-l-2 border-purple-500 py-4"
                >
                  <div className="absolute left-[-9px] top-6 w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500" />
                  <h4 className="text-xl font-semibold text-white mb-2">{step.title}</h4>
                  <p className="text-zinc-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;