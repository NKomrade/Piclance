import React from 'react';

const GlassyCards = () => {
  const cards = [
    {
      image: '/image-1.jpg',
      heading: 'Video Editing',
      text: 'Refine footage expertly.',
    },
    {
      image: '/image-2.jpg',
      heading: 'Photo Editing',
      text: 'Elevate images professionally.',
    },
    {
      image: '/image-5.jpg',
      heading: 'Social Media Management',
      text: 'Grow your social media.',
    },
    {
      image: '/main.jpg',
      heading: 'SFX/GFX',
      text: 'Elevate your story.',
    },
  ];

  return (
    <div className="flex flex-nowrap justify-center space-x-6 p-6 overflow-x-auto">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative w-80 h-[500px] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          style={{
            backgroundImage: `url(${card.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 transition-opacity duration-300 hover:bg-opacity-40">
            <h3 className="text-sm text-white pl-2 mb-2 transition-transform duration-300 hover:translate-y-[-2px]">
              {card.heading}
            </h3>
            <p className="text-[32px] font-semibold pl-2 text-gray-200 transition-transform duration-300 hover:translate-y-[-2px]">
              {card.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GlassyCards;
