'use client';

import { useState, useEffect } from 'react';

const backgrounds = [
  '/images/backgrounds/image1.png',
  '/images/backgrounds/image2.png',
  '/images/backgrounds/image3.png',
  '/images/backgrounds/image4.png',
];

const BackgroundCarousel = () => {
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1]">
      {backgrounds.map((bg, index) => (
        <div
          key={bg}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${bg})`,
            opacity: index === currentBackground ? 1 : 0,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black opacity-50" />
    </div>
  );
};

export default BackgroundCarousel;