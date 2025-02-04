import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';

const UserForm = () => {
  const location = useLocation();

  const [formData, setFormData] = useState({
    userType: 'individual',
    // Individual fields
    name: '',
    phone: '',
    email: '',
    // Organization fields
    orgName: '',
    orgEmail: '',
    orgPhone: '',
    // Common fields
    category: '',
    projectDuration: '',
    services: location.state?.selectedServices || [],
    communicationPreference: []
  });

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    { value: 'educational', label: 'Educational' },
    { value: 'youtube', label: 'YouTube Channel' },
    { value: 'business', label: 'Business' },
    { value: 'personal', label: 'Personal' },
  ];

  const durations = [
    { value: 'one-time', label: 'One Time Project' },
    { value: 'monthly', label: 'Monthly Package' },
    { value: 'continuous', label: 'Continuous Project' },
  ];

  const communicationModes = [
    { id: 'phone', label: 'Phone Call' },
    { id: 'email', label: 'Email' },
    { id: 'whatsapp', label: 'WhatsApp' },
  ];

  const services = {
    videoEditing: [
      { id: 'short-form', title: 'Short Form Video' },
      { id: 'long-form', title: 'Long Form Video' },
      { id: 'social-media', title: 'Social Media Management' },
      { id: 'gaming', title: 'Gaming Content' },
      { id: 'wedding-shoots', title: 'Wedding & Prewedding Shoots' }
    ],
    staticProjects: [
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

  const SubmitButton = ({ isLoading }) => {
    return (
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isLoading}
          className="px-8 py-3 rounded-xl font-medium text-white
            bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500
            hover:from-purple-600 hover:via-purple-700 hover:to-purple-600
            transition-colors disabled:opacity-70 disabled:cursor-not-allowed
            flex items-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Processing...
            </>
          ) : (
            'Submit'
          )}
        </button>
      </div>
    );
  };

  const generatePDF = () => {
    const today = new Date().toLocaleDateString('en-US', { 
        day: 'numeric', 
        month: 'short', 
        year: 'numeric'
    });

    const fileName = formData.userType === 'individual'
        ? formData.name.replace(/\s+/g, '_').toLowerCase()
        : formData.orgName.replace(/\s+/g, '_').toLowerCase();

    const doc = new jsPDF();

    // Add Lance logo at top left
    const logoWidth = 40;
    const logoHeight = 20;
    doc.addImage("/Logos/PiclanceText.png", "PNG", 20, 10, logoWidth, logoHeight);

    // Order Form title
    doc.setFontSize(24);
    doc.setFont("helvetica", "italic");
    doc.text('Form', 105, 25, { align: 'center' });

    // Add Date at the top right
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text('DATE:', 152, 18);
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(today, 165, 18);

    // Customer Details section
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(75, 0, 130); // Indigo color
    doc.text('CUSTOMER DETAILS', 20, 45);

    // Customer details box
    doc.setDrawColor(75, 0, 130);
    doc.rect(15, 50, 180, 70);

    // Customer information
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(0);
    let y = 60;

    if (formData.userType === 'individual') {
        doc.text(`NAME: ${formData.name}`, 20, y);
        doc.text(`EMAIL: ${formData.email}`, 20, y + 10);
        doc.text(`PHONE: ${formData.phone}`, 20, y + 20);
    } else {
        doc.text(`ORGANIZATION: ${formData.orgName}`, 20, y);
        doc.text(`EMAIL: ${formData.orgEmail}`, 20, y + 10);
        doc.text(`PHONE: ${formData.orgPhone}`, 20, y + 20);
    }

    doc.text(`CATEGORY: ${formData.category}`, 20, y + 35);
    doc.text(`DURATION: ${formData.projectDuration}`, 20, y + 45);

    // Communication preference
    y = 140;
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(75, 0, 130);
    doc.text('PREFERRED COMMUNICATION', 20, y);

    doc.setDrawColor(75, 0, 130);
    doc.rect(15, y + 5, 180, 25);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(0);
    const commPrefs = formData.communicationPreference.map(id =>
        communicationModes.find(mode => mode.id === id)?.label
    ).join(', ');
    doc.text(commPrefs, 20, y + 20);

    // Services Table
    y = 185;
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(75, 0, 130);
    doc.text('REQUESTED SERVICES', 20, y);

    y += 10;
    doc.setLineWidth(0.5);
    doc.setDrawColor(75, 0, 130);

    const tableWidth = 180;
    const colWidth = tableWidth / 2;
    const rowHeight = 20; // Increased row height

    // Draw table borders
    doc.line(15, y, 195, y); // Top border
    doc.line(15, y, 15, y + rowHeight * 3); // Left border
    doc.line(195, y, 195, y + rowHeight * 3); // Right border
    doc.line(15, y + rowHeight * 3, 195, y + rowHeight * 3); // Bottom border

    // Draw vertical and horizontal lines
    doc.line(105, y, 105, y + rowHeight * 3);
    doc.line(15, y + rowHeight, 195, y + rowHeight);
    doc.line(15, y + rowHeight * 2, 195, y + rowHeight * 2);

    // Add table content with text wrapping
    const tableData = [
        ['Video Editing', formData.services.filter(s => 
            services.videoEditing.some(v => v.id === s))
            .map(s => services.videoEditing.find(v => v.id === s)?.title)
            .join(', ') || '-'],
        ['Static Projects', formData.services.filter(s => 
            services.staticProjects.some(v => v.id === s))
            .map(s => services.staticProjects.find(v => v.id === s)?.title)
            .join(', ') || '-'],
        ['Website', formData.services.filter(s => 
            services.websites.some(v => v.id === s))
            .map(s => services.websites.find(v => v.id === s)?.title)
            .join(', ') || '-']
    ];

    doc.setFontSize(10);
    tableData.forEach((row, index) => {
        doc.setFont("helvetica", "bold");
        doc.text(row[0], 20, y + rowHeight * index + 12);
        doc.setFont("helvetica", "normal");

        // Wrap text inside table cells
        const wrappedText = doc.splitTextToSize(row[1], colWidth - 10);
        wrappedText.forEach((line, lineIndex) => {
            doc.text(line, 110, y + rowHeight * index + 12 + (lineIndex * 5));
        });
    });

    return {
        pdf: doc,
        fileName: `${fileName}_${today.replace(/,|\s+/g, '_')}.pdf`,
        base64: doc.output('datauristring')
    };
  };
  
  const sendToDiscord = async (pdfBase64, fileName) => {
    const webhookUrl = import.meta.env.VITE_FORMS_WEBHOOK_URL;
    const chunkSize = 5 * 1024 * 1024; // 5MB chunks
  
    const embed = {
      title: 'New Service Request',
      color: 0x6B46C1,
      fields: [
        { name: 'User Type', value: formData.userType, inline: true },
        { name: formData.userType === 'individual' ? 'Name' : 'Organization', 
          value: formData.userType === 'individual' ? formData.name : formData.orgName, 
          inline: true },
        { name: 'Email', 
          value: formData.userType === 'individual' ? formData.email : formData.orgEmail, 
          inline: true },
        { name: 'Category', value: formData.category, inline: true },
        { name: 'Duration', value: formData.projectDuration, inline: true },
        { name: 'Services', value: formData.services.join(', ').slice(0, 1024) || 'None' }
      ],
      timestamp: new Date().toISOString()
    };
  
    try {
      const base64Data = pdfBase64.split(',')[1] || pdfBase64;
      const binaryData = atob(base64Data);
      const bytes = new Uint8Array(binaryData.length);
      for (let i = 0; i < binaryData.length; i++) {
        bytes[i] = binaryData.charCodeAt(i);
      }
  
      // Send data in chunks if needed
      const totalChunks = Math.ceil(bytes.length / chunkSize);
      
      for (let i = 0; i < totalChunks; i++) {
        const start = i * chunkSize;
        const end = Math.min(start + chunkSize, bytes.length);
        const chunk = bytes.slice(start, end);
        
        const chunkBlob = new Blob([chunk], { type: 'application/pdf' });
        const formData = new FormData();
        
        // Only send embed with first chunk
        if (i === 0) {
          formData.append('payload_json', JSON.stringify({ embeds: [embed] }));
        }
        
        const chunkFileName = totalChunks > 1 
          ? `${fileName.replace('.pdf', '')}_part${i + 1}.pdf`
          : fileName;
        
        formData.append('file', chunkBlob, chunkFileName);
  
        const response = await fetch(webhookUrl, {
          method: 'POST',
          body: formData
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      }
  
      return true;
    } catch (error) {
      console.error('Error sending to Discord:', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const pdfData = await generatePDF();
      if (pdfData) {
        await sendToDiscord(pdfData.base64, pdfData.fileName);
        setShowConfirmation(true);
        window._tempPDF = pdfData.pdf;
        window._tempFileName = pdfData.fileName;
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirmationClose = () => {
    if (window._tempPDF) {
      window._tempPDF.save(window._tempFileName);
      delete window._tempPDF;
      delete window._tempFileName;
    }
    setShowConfirmation(false);
    setFormData({
      userType: 'individual',
      name: '',
      phone: '',
      email: '',
      orgName: '',
      orgEmail: '',
      orgPhone: '',
      category: '',
      projectDuration: '',
      services: [],
      communicationPreference: []
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (serviceId) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId]
    }));
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

        {/* User Type Selection */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-xl overflow-hidden p-1 bg-zinc-800">
            <button
              type="button"
              onClick={() => handleInputChange({ target: { name: 'userType', value: 'individual' }})}
              className={`px-8 py-4 rounded-lg font-medium text-lg transition-colors
                ${formData.userType === 'individual' 
                  ? 'bg-purple-500 text-white' 
                  : 'text-zinc-400 hover:text-white'}`}
            >
              Individual
            </button>
            <button
              type="button"
              onClick={() => handleInputChange({ target: { name: 'userType', value: 'organization' }})}
              className={`px-8 py-4 rounded-lg font-medium text-lg transition-colors
                ${formData.userType === 'organization' 
                  ? 'bg-purple-500 text-white' 
                  : 'text-zinc-400 hover:text-white'}`}
            >
              Organization
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal/Organization Details Section */}
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10" />
            <div className="relative bg-zinc-900/90 backdrop-blur-xl p-8 space-y-8">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                {formData.userType === 'individual' ? 'Personal Details' : 'Organization Details'}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formData.userType === 'individual' ? (
                  // Individual Fields
                  <>
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm text-white">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zinc-800/50 rounded-xl text-white outline-none"
                        placeholder="Enter your name"
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
                        className="w-full px-4 py-3 bg-zinc-800/50 rounded-xl text-white outline-none"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm text-white">Email ID *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zinc-800/50 rounded-xl text-white outline-none"
                        placeholder="Enter your email"
                      />
                    </div>
                  </>
                ) : (
                  // Organization Fields
                  <>
                    <div className="space-y-2">
                      <label htmlFor="orgName" className="text-sm text-white">Organization Name *</label>
                      <input
                        type="text"
                        id="orgName"
                        name="orgName"
                        required
                        value={formData.orgName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zinc-800/50 rounded-xl text-white outline-none"
                        placeholder="Enter organization name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="orgEmail" className="text-sm text-white">Organization Email *</label>
                      <input
                        type="email"
                        id="orgEmail"
                        name="orgEmail"
                        required
                        value={formData.orgEmail}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zinc-800/50 rounded-xl text-white outline-none"
                        placeholder="Enter organization email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="orgPhone" className="text-sm text-white">Contact Number *</label>
                      <input
                        type="tel"
                        id="orgPhone"
                        name="orgPhone"
                        required
                        value={formData.orgPhone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zinc-800/50 rounded-xl text-white outline-none"
                        placeholder="Enter contact number"
                      />
                    </div>
                  </>
                )}

                {/* Common Fields */}
                <div className="space-y-2">
                <label className="text-sm text-white">Preferred Mode of Communication *</label>
                <div className="flex flex-wrap gap-4">
                  {communicationModes.map((mode) => (
                    <label key={mode.id} className="flex items-center space-x-3 cursor-pointer">
                      <div className="relative flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.communicationPreference.includes(mode.id)}
                          onChange={() => {
                            setFormData(prev => ({
                              ...prev,
                              communicationPreference: prev.communicationPreference.includes(mode.id)
                                ? prev.communicationPreference.filter(id => id !== mode.id)
                                : [...prev.communicationPreference, mode.id]
                            }));
                          }}
                          className="appearance-none w-4 h-4 border-2 border-zinc-600 
                            checked:border-purple-500 checked:bg-transparent 
                            transition-colors cursor-pointer"
                        />
                        <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-300
                          ${formData.communicationPreference.includes(mode.id) ? 'scale-100' : 'scale-0'}`}>
                          <span className="text-purple-500 text-l">
                            ✓
                          </span>
                        </div>
                      </div>
                      <span className="text-white">{mode.label}</span>
                    </label>
                  ))}
                </div>
              </div>
                {/*Category drop down menu*/}
              <div className="space-y-2">
                      {/* Label */}
                      <label htmlFor="category" className="text-sm text-white">
                        Category *
                      </label>

                      {/* Dropdown Container */}
                      <div className="relative">
                        {/* Dropdown Menu */}
                        <select
                          id="category"
                          name="category"
                          required
                          value={formData.category}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-zinc-800/50 rounded-xl text-white outline-none appearance-none hover:bg-zinc-800/70 focus:ring-2 focus:ring-purple-500 transition-all"
                        >
                          {/* Placeholder Option */}
                          <option value="" disabled className="text-gray-400">
                            Select Category
                          </option>

                          {/* Dynamic Options */}
                          {categories.map((cat) => (
                            <option key={cat.value} value={cat.value} className="bg-zinc-800">
                              {cat.label}
                            </option>
                          ))}
                        </select>

                        {/* Custom Dropdown Arrow */}
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg
                            className="w-5 h-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  {/*Project drop down menu*/}
                    <div className="space-y-2">
                  {/* Label */}
                  <label htmlFor="projectDuration" className="text-sm text-white">
                    Project Duration *
                  </label>

                  {/* Dropdown Container */}
                  <div className="relative">
                    {/* Dropdown Menu */}
                    <select
                      id="projectDuration"
                      name="projectDuration"
                      required
                      value={formData.projectDuration}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zinc-800/50 rounded-xl text-white outline-none appearance-none hover:bg-zinc-800/70 focus:ring-2 focus:ring-purple-500 transition-all"
                    >
                      {/* Placeholder Option */}
                      <option value="" disabled className="text-gray-400">
                        Select Duration
                      </option>

                      {/* Dynamic Options */}
                      {durations.map((duration) => (
                        <option key={duration.value} value={duration.value} className="bg-zinc-800">
                          {duration.label}
                        </option>
                      ))}
                    </select>

                    {/* Custom Dropdown Arrow */}
                    <div className="absolute inset-y-0  right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
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
              <SubmitButton isLoading={isLoading} />
            </div>
          </form>
  
          {/* Confirmation Modal */}
          {showConfirmation && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-zinc-900 rounded-2xl p-8 max-w-md w-full space-y-6">
                <h3 className="text-xl font-bold text-white text-center">
                  Thank you for your submission!
                </h3>
                <p className="text-zinc-300 text-center">
                  Our executive will connect with you soon. A copy of your submission details will be downloaded to your device.
                </p>
                <div className="flex justify-center">
                  <button
                    onClick={handleConfirmationClose}
                    className="px-8 py-3 rounded-xl font-medium text-white
                      bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500
                      hover:from-purple-600 hover:via-purple-700 hover:to-purple-600
                      transition-colors"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  
export default UserForm;
