import React from 'react';

const GlassyCards = () => {
  const cards = [
    { image: '/Services/reels.png', heading: 'Short Form Video', text: 'Bite-sized stories, endless impact.' },
    { image: '/Services/vid-edit.png', heading: 'Long Form Video', text: 'Elevate your stories.' },
    { image: '/Services/image-5.png', heading: 'Social Media Management', text: 'Maximize your reach.' },
    { image: '/Services/gaming.png', heading: 'Gaming Content', text: 'Bringing your gameplay to life.' },
    { image: '/Services/prewedding.png', heading: 'Wedding & Prewedding Shoots', text: 'Love stories told beautifully.' },
    { image: '/Services/logo.png', heading: 'Logos', text: 'Brand identity at a glance.' },
    { image: '/Services/image-2.png', heading: 'Thumbnails', text: 'First impression that click.' },
    { image: '/Services/photo.png', heading: 'Photo Editing', text: 'Perfection, pixel by pixel.' },
    { image: '/Services/wedding.png', heading: 'Wedding Invitation', text: 'Elegant invites, lasting impact.' },
    { image: '/Services/brand1.png', heading: 'Brand Design', text: ' Stand out in the crowd with style.' },
    { image: '/Services/sfxgfx.png', heading: 'Vectors', text: 'Crisp, clean, and scalable artistry.' },
    { image: '/Services/web.png', heading: 'Web Design & Web Development', text: 'Build stunning websites' },
  ];

  const SingleCard = ({ card }) => (
    <div className="relative w-60 md:w-80 h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg shrink-0 transition-transform duration-300 hover:shadow-2xl">
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ 
          backgroundImage: `url(${card.image})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }} 
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 overflow-hidden flex-col items-start justify-end p-4 transition-opacity duration-300 hover:bg-opacity-40">
        <h3 className="text-xs md:text-sm text-white pl-2 mb-1 md:mb-2">{card.heading}</h3>
        <p className="text-xl md:text-[32px] font-semibold pl-2 text-gray-200 leading-tight">{card.text}</p>
      </div>
    </div>
  );

  return (
    <div className="relative overflow-hidden">
      <div className="flex gap-4 min-w-max animate-marquee">
        {/* Original set of cards */}
        {cards.map((card, index) => (
          <SingleCard key={`original-${index}`} card={card} />
        ))}
        {/* Duplicate set for seamless loop */}
        {cards.map((card, index) => (
          <SingleCard key={`duplicate-${index}`} card={card} />
        ))}
      </div>
    </div>
  );
};

export default GlassyCards;