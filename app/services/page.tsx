"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Video, Image as ImageIcon, Globe, ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const SelectServices: React.FC = () => {
  const router = useRouter();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const services: { [key: string]: Service[] } = {
    videoEditing: [
      { id: "short-form", title: "Short Form Video", description: "Bite-sized stories, endless impact.", icon: "/Services/reels.png" },
      { id: "long-form", title: "Long Form Video", description: "Elevate your stories.", icon: "/Services/vid-edit.png" },
      { id: "social-media", title: "Social Media Management", description: "Maximize your reach.", icon: "/Services/image-5.png" },
      { id: "gaming", title: "Gaming Content", description: "Bringing your gameplay to life.", icon: "/Services/gaming.png" },
      { id: "wedding-shoots", title: "Wedding & Prewedding Shoots", description: "Love stories told beautifully.", icon: "/Services/prewedding.png" },
    ],
    staticProjects: [
      { id: "logos", title: "Logos", description: "Brand identity at a glance.", icon: "/Services/logo.png" },
      { id: "thumbnails", title: "Thumbnails", description: "First impression that click.", icon: "/Services/image-2.png" },
      { id: "photo-edits", title: "Photo Editing", description: "Perfection, pixel by pixel.", icon: "/Services/photo.png" },
      { id: "wedding-invite", title: "Wedding Invitation", description: "Elegant invites, lasting impact.", icon: "/Services/wedding.png" },
      { id: "brand-design", title: "Brand Design", description: "Stand out in the crowd with style.", icon: "/Services/brand.png" },
      { id: "vectors", title: "Vectors", description: "Crisp, clean, and scalable artistry.", icon: "/Services/sfxgfx.png" }
    ],
    websites: [
      { id: "web-design-dev", title: "Web Design & Web Development", description: "Build stunning websites", icon: "/Services/web.png" }
    ]
  };

  const toggleService = (id: string) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedServices([]);
  }, []);

  const ServiceCard: React.FC<{ service: Service; selected: boolean; onToggle: (id: string) => void }> = ({ service, selected, onToggle }) => (
    <div
      onClick={() => onToggle(service.id)}
      className={`relative cursor-pointer overflow-hidden rounded-xl border-2 transition-all duration-300 z-10
        ${selected ? "border-purple-500 bg-purple-500/10 z-20" : "border-zinc-800 hover:border-purple-500/50"}`}
    >
      <div className="aspect-video relative overflow-hidden group">
        <Image
          src={service.icon}
          alt={service.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-bold text-white">{service.title}</h3>
        <p className="text-sm text-zinc-400">{service.description}</p>
      </div>
      <div
        className={`absolute top-3 right-3 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 z-30
        ${selected ? "border-purple-500 bg-purple-500" : "border-white"}`}
      >
        {selected && <div className="w-3 h-3 rounded-full bg-white" />}
      </div>
    </div>
  );

  return (
    <div className="bg-zinc-900 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-4 px-8">
          <Link
            href="/"
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
              <ServiceCard key={service.id} service={service} selected={selectedServices.includes(service.id)} onToggle={toggleService} />
            ))}
          </div>
        </section>

        <section className="space-y-6 p-8">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-6 h-6 text-purple-500" />
            <h2 className="text-2xl font-bold text-white">Static Projects</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {services.staticProjects.map(service => (
              <ServiceCard key={service.id} service={service} selected={selectedServices.includes(service.id)} onToggle={toggleService} />
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
              <ServiceCard key={service.id} service={service} selected={selectedServices.includes(service.id)} onToggle={toggleService} />
            ))}
          </div>
        </section>

        <div className="flex justify-end p-8">
        <button
          onClick={() => {
            // Use the encoded URI component to safely pass services in URL
            const servicesParam = encodeURIComponent(selectedServices.join(','));
            router.push(`/form?selectedServices=${servicesParam}`);
          }}
          disabled={selectedServices.length === 0}
          className={`flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-all duration-300
          ${selectedServices.length > 0 ? "bg-purple-500 hover:bg-purple-600 text-white" : "bg-zinc-800 text-zinc-500 cursor-not-allowed"}`}
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