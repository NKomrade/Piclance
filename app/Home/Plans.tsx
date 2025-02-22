"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Service {
  src: string;
  alt: string;
  category: string;
}

interface Step {
  title: string;
  description: string;
}

const serviceImages: Service[] = [
  { src: "/Services/vid-edit.png", alt: "Video Editing", category: "Video Production" },
  { src: "/Services/web.png", alt: "Web Development", category: "Development" },
  { src: "/Services/graphic.png", alt: "Graphic Design", category: "Design" },
  { src: "/Services/wedding.png", alt: "Wedding Cards", category: "Invitation" },
];

const howToSteps: Step[] = [
  {
    title: "Select Required Services",
    description: "Select from our wide range of professional services tailored to your needs",
  },
  {
    title: "Fill Your Details",
    description: "Tell us about your project requirements and creative goals",
  },
  {
    title: "Converse With Our Executive",
    description: "We'll match you with the perfect expert for your project",
  },
  {
    title: "Enjoy Discounts",
    description: "Monitor your project's development with real-time updates",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-zinc-800 to-transparent py-20 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Select the services you want
            </span>
          </h2>
          <div className="flex justify-center items-center">
            <Link
              href="/services"
              className="group relative w-[200px] px-6 py-3 md:px-8 md:py-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg overflow-hidden flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-black/20 translate-y-full transition-transform group-hover:translate-y-0"></div>
              <span className="relative text-white font-medium whitespace-nowrap">Select Services</span>
            </Link>
          </div>
        </div>

        {/* Services Grid & Steps Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Services Grid */}
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
                  <Image
                    src={service.src}
                    alt={service.alt}
                    width={300}
                    height={300}
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

          {/* How It Works Section */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-8">How It Works</h3>
            <div className="space-y-6">
              {howToSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative pl-12 border-l-2 border-purple-500 py-4 hover:bg-zinc-800 transition-colors duration-300 rounded-md"
                >
                  <div className="absolute left-[-9px] top-6 w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500" />
                  <h4 className="text-xl font-semibold text-white mb-2">{step.title}</h4>
                  <p className="text-zinc-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;