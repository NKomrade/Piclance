import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Video, Image, Globe, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SelectServices = () => {
  const [selectedServices, setSelectedServices] = useState([]);

  const services = {
    videoEditing: [
      { id: 'short-form', title: 'Short Form Video', description: 'Bite-sized stories, endless impact.', icon: '/Services/reels.png' },
      { id: 'long-form', title: 'Long Form Video', description: 'Elevate your stories.', icon: '/Services/vid-edit.png' },
      { id: 'social-media', title: 'Social Media Management', description: 'Maximize your reach.', icon: '/Services/image-5.png' },
      { id: 'gaming', title: 'Gaming Content', description: 'Bringing your gameplay to life.', icon: '/Services/gaming.png' },
      { id: 'wedding-shoots', title: 'Wedding & Prewedding Shoots', description: 'Love stories told beautifully.', icon: '/Services/prewedding.png' },
    ],
    staticProjects: [
      { id: 'logos', title: 'Logos', description: 'Brand identity at a glance.', icon: '/Services/logo.png' },
      { id: 'thumbnails', title: 'Thumbnails', description: 'First impression that click.', icon: '/Services/image-2.png' },
      { id: 'photo-edits', title: 'Photo Editing', description: 'Perfection, pixel by pixel.', icon: '/Services/photo.png' },
      { id: 'wedding-invite', title: 'Wedding Invitation', description: 'Elegant invites, lasting impact.', icon: '/Services/wedding.png' },
      { id: 'brand-design', title: 'Brand Design', description: 'Stand out in the crowd with style.', icon: '/Services/brand.png' },
      { id: 'vectors', title: 'Vectors', description: 'Crisp, clean, and scalable artistry.', icon: '/Services/sfxgfx.png' }
    ],
    websites: [
      { id: 'web-design-dev', title: 'Web Design & Web Development', description: 'Build stunning websites', icon: '/Services/web.png' }
    ]
  };

  const toggleService = (id) => {
    setSelectedServices(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedServices([]);
  }, []);

  const ServiceCard = ({ service, selected, onToggle }) => (
    <div 
      onClick={() => onToggle(service.id)}
      className={`
        relative cursor-pointer overflow-hidden z-10
        rounded-xl border-2 transition-all duration-300
        ${selected ? 'border-purple-500 bg-purple-500/10 z-20' : 'border-zinc-800 md:hover:border-purple-500/50'}
      `}
    >
      <div className="aspect-video relative overflow-hidden group">
        <img 
          src={service.icon} 
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-bold text-white">{service.title}</h3>
        <p className="text-sm text-zinc-400">{service.description}</p>
      </div>
      <div className={`
        absolute top-3 right-3 w-6 h-6 rounded-full border-2 z-30
        transition-all duration-300 flex items-center justify-center
        ${selected ? 'border-purple-500 bg-purple-500' : 'border-white'}
      `}>
        {selected && <div className="w-3 h-3 rounded-full bg-white" />}
      </div>
    </div>
  );

  return (
    <div className="bg-zinc-900 min-h-screen pt-20">
      <Navbar />

      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-4 px-8">
          <Link
            to="/"
            className="flex items-center gap-2 px-6 py-2 rounded-lg font-medium bg-zinc-800 text-white hover:bg-zinc-700 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </Link>
        </div>

        <section className="space-y-6 p-8">
          <div className="flex items-center gap-2">
            <Video className="w-6 h-6 text-purple-500" />
            <h2 className="text-2xl font-bold text-white">Video Editing</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
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

        <section className="space-y-6 p-8">
          <div className="flex items-center gap-2">
            <Image className="w-6 h-6 text-purple-500" />
            <h2 className="text-2xl font-bold text-white">Static Projects</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
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

        <section className="space-y-6 p-8">
          <div className="flex items-center gap-2">
            <Globe className="w-6 h-6 text-purple-500" />
            <h2 className="text-2xl font-bold text-white">Websites</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
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
        
        <div className="flex justify-end p-8">
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
    </div>
  );
};

export default SelectServices;