import React from 'react';

const GlassyCards = () => {
  const cards = [
    { image: '/image-1.jpg', heading: 'Video Editing', text: 'Refine footage expertly.' },
    { image: '/image-2.jpg', heading: 'Photo Editing', text: 'Elevate images professionally.' },
    { image: '/image-3.jpg', heading: 'Graphic Design', text: 'Design with creativity.' },
    { image: '/image-4.jpg', heading: 'Motion Graphics', text: 'Bring visuals to life.' },
    { image: '/image-5.jpg', heading: 'Social Media Management', text: 'Grow your social media.' },
    { image: '/image-6.jpg', heading: 'Content Writing', text: 'Craft compelling content.' },
    { image: '/image-7.jpg', heading: 'Web Development', text: 'Build stunning websites.' },
    { image: '/image-8.jpg', heading: 'SEO Optimization', text: 'Boost your visibility.' },
    { image: '/image-9.jpg', heading: 'Digital Marketing', text: 'Maximize your reach.' },
    { image: '/image-10.jpg', heading: 'Voiceovers', text: 'Enhance audio experience.' },
    { image: '/image-11.jpg', heading: 'Photography', text: 'Capture perfect moments.' },
    { image: '/image-12.jpg', heading: 'SFX/GFX', text: 'Elevate your stories.' },
  ];

  const SingleCard = ({ card }) => (
    <div
      className="relative w-60 md:w-80 h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg flex-shrink-0 transition-transform duration-300 hover:shadow-2xl"
      style={{ backgroundImage: `url(${card.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-end p-4 transition-opacity duration-300 hover:bg-opacity-40">
        <h3 className="text-xs md:text-sm text-white pl-2 mb-1 md:mb-2">{card.heading}</h3>
        <p className="text-xl md:text-[32px] font-semibold pl-2 text-gray-200 leading-tight">{card.text}</p>
      </div>
    </div>
  );

  return (
    <div className="relative overflow-hidden">
      <div className="flex gap-4 animate-marquee">
        {/* Render all cards twice for seamless looping */}
        {[...cards, ...cards].map((card, index) => (
          <SingleCard key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default GlassyCards;