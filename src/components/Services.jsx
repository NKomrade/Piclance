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
  // Add remaining services as needed...
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
    <div className="relative z-20 py-10 lg:py-20 flex flex-col items-center gap-10">
      {/* Heading Section */}
      <div className="text-center">
        <h2 className="text-4xl lg:text-6xl font-bold tracking-tight 
          bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-white
          animate-text mb-4">
          Our Services
        </h2>
        <p className="text-lg text-neutral-400 max-w-2xl">
          Seamlessly connect with top-tier editors for all your video, image, and graphic needs.
        </p>
      </div>

      {/* Cards Section with Marquee */}
      <div className="w-full overflow-hidden relative">
        <div className="flex gap-6 animate-marquee">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}
          {services.map((service) => (
            <ServiceCard
              key={`${service.title}-duplicate`}
              {...service}
            />
          ))}
        </div>
      </div>

      {/* Marquee Animation */}
      <style jsx>{`
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesGrid;
