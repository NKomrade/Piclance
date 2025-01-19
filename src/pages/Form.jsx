import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    services: []
  });

  const services = {
    videoEditing: [
      { id: 'short-form', title: 'Short Form Video' },
      { id: 'long-form', title: 'Long Form Video' },
      { id: 'social-media', title: 'Social Media Management' },
      { id: 'gaming', title: 'Gaming Content' }
    ],
    staticProjects: [
      { id: 'wedding-shoots', title: 'Wedding & Prewedding Shoots' },
      { id: 'logos', title: 'Logos' },
      { id: 'thumbnails', title: 'Thumbnails' },
      { id: 'photo-edits', title: 'Photo Editing' },
      { id: 'wedding-invite', title: 'Wedding Invitation' },
      { id: 'brand-design', title: 'Brand Design' },
      { id: 'vectors', title: 'Vectors' }
    ],
    websites: [
      { id: 'web-design-dev', title: 'Web Design & Development' }
    ]
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceToggle = (serviceId) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const renderServiceCheckboxes = (serviceGroup) => {
    return serviceGroup.map(service => (
      <label
        key={service.id}
        className="relative flex items-center space-x-3 p-4 rounded-xl cursor-pointer
          bg-gradient-to-r from-zinc-900 to-zinc-800
          before:absolute before:inset-0 before:rounded-xl before:p-[1px]
          before:bg-gradient-to-r before:from-purple-500/50 before:via-pink-500/50 before:to-purple-500/50
          before:opacity-0 hover:before:opacity-100 before:transition-opacity
          overflow-hidden"
      >
        <div className="relative z-10 flex items-center space-x-3 w-full">
          <div className="relative flex items-center">
            <input
              type="checkbox"
              checked={formData.services.includes(service.id)}
              onChange={() => handleServiceToggle(service.id)}
              className="appearance-none w-4 h-4 rounded-full border-2 border-zinc-600 
                checked:border-purple-500 checked:bg-transparent 
                transition-colors cursor-pointer"
            />
            <div className={`absolute inset-0 rounded-full transition-transform
              ${formData.services.includes(service.id) ? 'scale-100' : 'scale-0'}
            `}>
              <div className="absolute inset-[3px] rounded-full bg-purple-500" />
            </div>
          </div>
          <span className="text-white font-medium">{service.title}</span>
        </div>
      </label>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-lg font-medium 
              bg-gradient-to-r from-zinc-800 to-zinc-700 text-white 
              hover:from-zinc-700 hover:to-zinc-600 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Details Section */}
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10" />
            <div className="relative bg-zinc-900/90 backdrop-blur-xl p-8 space-y-8">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Personal Details
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-white">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zinc-800/50 rounded-xl text-white 
                        outline-none relative z-10"
                      placeholder="Enter your name"
                    />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-white">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zinc-800/50 rounded-xl text-white 
                        outline-none relative z-10 backdrop-blur-xl"
                      placeholder="Enter your maild id"
                    />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm text-white">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zinc-800/50 rounded-xl text-white 
                        outline-none relative z-10 backdrop-blur-xl"
                      placeholder="Enter your phone number"
                    />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm text-white">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zinc-800/50 rounded-xl text-white 
                        outline-none relative z-10 backdrop-blur-xl"
                      placeholder="Enter your company name"
                    />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-white">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zinc-800/50 rounded-xl text-white 
                      outline-none relative z-10 backdrop-blur-xl resize-none"
                    placeholder="Tell us about your project..."
                  />
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10" />
            <div className="relative bg-zinc-900/90 backdrop-blur-xl p-8 space-y-8">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Selected Services
              </h2>
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-zinc-300">Video Editing</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {renderServiceCheckboxes(services.videoEditing)}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-zinc-300">Static Projects</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {renderServiceCheckboxes(services.staticProjects)}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-zinc-300">Websites</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {renderServiceCheckboxes(services.websites)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-8 py-3 rounded-xl font-medium text-white
                bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500
                hover:from-purple-600 hover:via-purple-700 hover:to-purple-600
                transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;