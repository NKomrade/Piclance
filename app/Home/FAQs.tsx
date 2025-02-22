"use client";

import React, { useState } from 'react';
import { ChevronDown, Users, Rocket, Zap, Clock, IndianRupee, LucideIcon } from 'lucide-react';

interface FAQItem {
  icon: React.ReactNode;
  question: string;
  answer: string;
  color: string;
}

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      icon: <Users className="w-6 h-6" />,
      question: "Who can benefit from Piclance's services?",
      answer: "Our services are tailored for individuals, content creators, businesses, and anyone seeking professional media solutions.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      question: "Do you provide customized solutions?",
      answer: "Yes, all our services are fully customized to align with your specific needs and vision.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      question: "What sets Piclance apart from others?",
      answer: "Our focus on creativity, attention to detail, and client satisfaction sets us apart. We work collaboratively to bring your ideas to life.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      question: "Typical turnaround time for a project?",
      answer: "Turnaround times depend on the complexity of the project. We ensure timely delivery while maintaining high quality.",
      color: "from-yellow-500 to-green-500"
    },
    {
      icon: <IndianRupee className="w-6 h-6" />,
      question: "How are your services priced?",
      answer: "We offer top-quality services at affordable prices.",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto pt-[50px] md:p-[50px] space-y-6">
      <h2 className="text-5xl font-bold text-center">
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          FAQs
        </span>
      </h2>
      
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div 
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`
              relative rounded-xl transition-all duration-300
              ${openIndex === index ? 'shadow-lg' : ''}
              ${hoveredIndex === index ? 'transform -translate-y-1' : ''}
            `}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full p-6 text-left"
              type="button"
              aria-expanded={openIndex === index}
            >
              <div className="flex items-center gap-4">
                <div className={`
                  p-2 rounded-lg bg-gradient-to-r ${item.color}
                  text-black transition-transform duration-300
                  ${openIndex === index ? 'rotate-12' : ''}
                `}>
                  {item.icon}
                </div>
                <h3 className="flex-grow md:text-xl text-sm font-semibold text-white">{item.question}</h3>
                <ChevronDown 
                  className={`
                    w-6 h-6 transition-transform duration-300 text-white
                    ${openIndex === index ? 'rotate-180' : ''}
                  `}
                />
              </div>
            </button>
            
            <div className={`
              overflow-hidden transition-all duration-300
              ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
            `}>
              <p className="pb-6 px-4 text-gray-400">
                {item.answer}
              </p>
            </div>
            
            {hoveredIndex === index && (
              <div 
                className={`
                  absolute inset-0 -z-10 opacity-20 rounded-xl
                  bg-gradient-to-r ${item.color}
                  blur-xl transition-opacity duration-300
                `}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;