'use client';

import { useState } from 'react';
import { Map } from 'lucide-react';

const MapButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="http://map.ezsmp.live"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-green-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Map size={24} />
      {isHovered && (
        <span className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded whitespace-nowrap">
          View World Map
        </span>
      )}
    </a>
  );
};

export default MapButton;