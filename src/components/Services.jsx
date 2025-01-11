import React from 'react';
import { cn } from "../lib/utils";
import { Camera, Video, Paintbrush, Scissors, Layout, Image, FileImage, PenTool, Layers, Frame, Palette, Monitor } from 'lucide-react';

const services = [
  {
    title: "Video Editing",
    description: "Professional video editing services for all your content needs",
    icon: <Video className="w-8 h-8" />,
    gradient: "from-purple-500/50 to-blue-500/50"
  },
  {
    title: "Photo Retouching",
    description: "Expert photo enhancement and retouching services",
    icon: <Camera className="w-8 h-8" />,
    gradient: "from-blue-500/50 to-teal-500/50"
  },
  {
    title: "Digital Art",
    description: "Custom digital artwork and illustrations",
    icon: <Paintbrush className="w-8 h-8" />,
    gradient: "from-teal-500/50 to-emerald-500/50"
  },
  {
    title: "Image Manipulation",
    description: "Advanced image manipulation and compositing",
    icon: <Scissors className="w-8 h-8" />,
    gradient: "from-emerald-500/50 to-cyan-500/50"
  },
  {
    title: "Graphic Design",
    description: "Creative graphic design solutions for your brand",
    icon: <Layout className="w-8 h-8" />,
    gradient: "from-cyan-500/50 to-blue-500/50"
  },
  {
    title: "Color Correction",
    description: "Professional color grading and correction",
    icon: <Image className="w-8 h-8" />,
    gradient: "from-blue-500/50 to-indigo-500/50"
  },
  {
    title: "Format Conversion",
    description: "Convert images and videos to any format",
    icon: <FileImage className="w-8 h-8" />,
    gradient: "from-indigo-500/50 to-purple-500/50"
  },
  {
    title: "Vector Graphics",
    description: "Scalable vector graphics and logo design",
    icon: <PenTool className="w-8 h-8" />,
    gradient: "from-purple-500/50 to-pink-500/50"
  },
  {
    title: "3D Modeling",
    description: "3D modeling and rendering services",
    icon: <Layers className="w-8 h-8" />,
    gradient: "from-pink-500/50 to-rose-500/50"
  },
  {
    title: "Animation",
    description: "Custom animation and motion graphics",
    icon: <Frame className="w-8 h-8" />,
    gradient: "from-rose-500/50 to-orange-500/50"
  },
  {
    title: "Brand Design",
    description: "Comprehensive brand identity design",
    icon: <Palette className="w-8 h-8" />,
    gradient: "from-orange-500/50 to-amber-500/50"
  },
  {
    title: "Social Media",
    description: "Social media graphics and templates",
    icon: <Monitor className="w-8 h-8" />,
    gradient: "from-amber-500/50 to-yellow-500/50"
  }
];

const ServiceCard = ({ title, description, icon, gradient }) => {
  return (
    <div className="group relative p-6 rounded-xl border border-neutral-800 bg-black/20 backdrop-blur-sm 
      hover:bg-neutral-900/30 transition-all duration-300 ease-in-out 
      hover:scale-[1.02] hover:shadow-lg hover:shadow-neutral-900/50">
      <div className={cn(
        "mb-4 p-3 rounded-full w-fit",
        "group-hover:scale-110 transition-all duration-300",
        "bg-gradient-to-br",
        gradient,
        "animate-pulse hover:animate-none"
      )}>
        <div className="text-white">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-medium text-white mb-2 tracking-tight">
        {title}
      </h3>
      <p className="text-sm text-neutral-400">
        {description}
      </p>
    </div>
  );
};

const ServicesGrid = () => {
  return (
    <div className="relative z-20 py-10 lg:py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 w-7xl mx-auto overflow-hidden">
      </div>

      <div className="max-w-7xl w-full mx-auto relative px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight 
            bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-white
            animate-text mb-4">
            Our Services
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Seamlessly connect with top-tier editors for all your video, image, and graphic needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;