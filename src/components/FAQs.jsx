import React, { useState } from 'react';
import { ChevronDown, Brain, Rocket, Zap, Crown, Target } from 'lucide-react';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const faqData = [
    {
      icon: <Brain className="w-6 h-6" />,
      question: "Can AI really become conscious?",
      answer: "This is one of the most fascinating debates in AI ethics. While current AI systems can process information and learn patterns, consciousness involves subjective experiences and self-awareness. Some theorists argue that consciousness emerges from complex information processing, while others believe there's a fundamental gap between computation and consciousness that AI can't bridge.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      question: "What happens when we colonize Mars?",
      answer: "Mars colonization raises incredible questions about human adaptation. We'll need to solve challenges like radiation protection, food production in Martian soil, and psychological effects of isolation. The first colonists will essentially be creating a new branch of human civilization, potentially developing distinct cultural and even physiological characteristics over time.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      question: "Could we harness quantum tunneling for teleportation?",
      answer: "While quantum tunneling is a fascinating phenomenon where particles pass through barriers they classically shouldn't be able to, using it for human teleportation faces enormous challenges. The quantum states of trillions of atoms would need to be perfectly measured and reconstructed. However, scientists are exploring quantum teleportation for information transfer in quantum computers.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Crown className="w-6 h-6" />,
      question: "What if we could upload our consciousness?",
      answer: "Mind uploading is a provocative concept that raises questions about identity and consciousness. Even if we could create a perfect digital copy of someone's neural patterns, would that copy be 'you'? It challenges our understanding of consciousness continuity and what makes us uniquely ourselves.",
      color: "from-yellow-500 to-green-500"
    },
    {
      icon: <Target className="w-6 h-6" />,
      question: "Could we achieve biological immortality?",
      answer: "Recent advances in genetic engineering and understanding of aging mechanisms suggest biological immortality might be theoretically possible. Scientists are studying organisms like the immortal jellyfish and investigating telomere preservation. However, the implications for society, resources, and human psychology would be profound.",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-[50px] space-y-6">
      <h2 className="text-5xl font-bold text-center mb-16">
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
            >
              <div className="flex items-center gap-4">
                <div className={`
                  p-2 rounded-lg bg-gradient-to-r ${item.color}
                  text-black transition-transform duration-300
                  ${openIndex === index ? 'rotate-12' : ''}
                `}>
                  {item.icon}
                </div>
                <h3 className="flex-grow text-xl font-semibold text-white">{item.question}</h3>
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
              <p className="px-6 pb-6 text-gray-400 leading-relaxed">
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
