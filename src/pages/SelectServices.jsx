import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Video, Image, Globe, ChevronRight } from 'lucide-react';

const SelectServices = () => {
  const [selectedServices, setSelectedServices] = useState([]);

  const services = {
    videoEditing: [
      { id: 'short-form', title: 'Short Form', description: 'Reels, TikTok, and Shorts', icon: '/api/placeholder/300/200' },
      { id: 'long-form', title: 'Long Form', description: 'YouTube videos and documentaries', icon: '/api/placeholder/300/200' },
      { id: 'social-media', title: 'Social Media', description: 'Instagram, Facebook, and LinkedIn', icon: '/api/placeholder/300/200' },
      { id: 'gaming', title: 'Gaming Content', description: 'Streaming and gameplay highlights', icon: '/api/placeholder/300/200' }
    ],
    staticProjects: [
      { id: 'logos', title: 'Logos', description: 'Custom logo design and branding', icon: '/api/placeholder/300/200' },
      { id: 'thumbnails', title: 'Thumbnails', description: 'Eye-catching video thumbnails', icon: '/api/placeholder/300/200' },
      { id: 'photo-edits', title: 'Photo Edits', description: 'Professional photo retouching', icon: '/api/placeholder/300/200' },
      { id: 'wedding', title: 'Wedding Innovation', description: 'Creative wedding photography', icon: '/api/placeholder/300/200' },
      { id: 'brand-design', title: 'Brand Design', description: 'Complete brand identity packages', icon: '/api/placeholder/300/200' },
      { id: 'vectors', title: 'Vectors', description: 'Scalable vector graphics', icon: '/api/placeholder/300/200' }
    ],
    websites: [
      { id: 'web-dev', title: 'Web Development', description: 'Full-stack web development', icon: '/api/placeholder/300/200' },
      { id: 'web-design', title: 'Web Design', description: 'UI/UX and visual design', icon: '/api/placeholder/300/200' }
    ]
  };

  const toggleService = (id) => {
    setSelectedServices(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const ServiceCard = ({ service, selected, onToggle }) => (
    <div 
      onClick={() => onToggle(service.id)}
      className={`
        relative cursor-pointer group overflow-hidden
        rounded-xl border-2 transition-all duration-300
        ${selected ? 'border-purple-500 bg-purple-500/10' : 'border-zinc-800 hover:border-purple-500/50'}
      `}
    >
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={service.icon} 
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-bold text-white">{service.title}</h3>
        <p className="text-sm text-zinc-400">{service.description}</p>
      </div>
      <div className={`
        absolute top-3 right-3 w-6 h-6 rounded-full border-2
        transition-all duration-300 flex items-center justify-center
        ${selected ? 'border-purple-500 bg-purple-500' : 'border-white'}
      `}>
        {selected && <div className="w-3 h-3 rounded-full bg-white" />}
      </div>
    </div>
  );

  return (
    <div className="bg-zinc-900 w-full mx-auto p-8 space-y-12">
      <Navbar />
      {/* Video Editing Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Video className="w-6 h-6 text-purple-500" />
          <h2 className="text-2xl font-bold text-white">Video Editing</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.videoEditing.map(service => (
            <ServiceCard 
              key={service.id}
              service={service}
              selected={selectedServices.includes(service.id)}
              onToggle={toggleService}
            />
          ))}
        </div>
      </section>

      {/* Static Projects Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Image className="w-6 h-6 text-purple-500" />
          <h2 className="text-2xl font-bold text-white">Static Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.staticProjects.map(service => (
            <ServiceCard 
              key={service.id}
              service={service}
              selected={selectedServices.includes(service.id)}
              onToggle={toggleService}
            />
          ))}
        </div>
      </section>

      {/* Websites Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Globe className="w-6 h-6 text-purple-500" />
          <h2 className="text-2xl font-bold text-white">Websites</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.websites.map(service => (
            <ServiceCard 
              key={service.id}
              service={service}
              selected={selectedServices.includes(service.id)}
              onToggle={toggleService}
            />
          ))}
        </div>
      </section>

      {/* Next Button */}
      <div className="flex justify-end pt-8">
        <button
          disabled={selectedServices.length === 0}
          className={`
            flex items-center gap-2 px-8 py-3 rounded-lg font-medium
            transition-all duration-300
            ${selectedServices.length > 0 
              ? 'bg-purple-500 hover:bg-purple-600 text-white'
              : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'}
          `}
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default SelectServices;