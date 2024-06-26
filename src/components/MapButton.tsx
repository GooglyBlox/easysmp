'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Map } from 'lucide-react';

const MapButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isServerStatusOpen, setIsServerStatusOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleServerStatusChange = (event: CustomEvent) => {
      setIsServerStatusOpen(event.detail.isOpen);
    };

    const handleNavChange = (event: CustomEvent) => {
      setIsNavOpen(event.detail.isOpen);
    };

    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('serverStatusChange' as any, handleServerStatusChange);
    window.addEventListener('navChange' as any, handleNavChange);
    window.addEventListener('resize', checkIsMobile);
    checkIsMobile();

    return () => {
      window.removeEventListener('serverStatusChange' as any, handleServerStatusChange);
      window.removeEventListener('navChange' as any, handleNavChange);
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const isHomePage = pathname === '/';

  const buttonPosition = () => {
    if (isMobile) {
      if (isNavOpen) return 'hidden';
      if (isHomePage && isServerStatusOpen) return 'bottom-[calc(3rem+48px)] right-4';
      return 'bottom-16 right-4';
    } else {
      return isHomePage ? 'bottom-16 right-4' : 'bottom-4 right-4';
    }
  };

  return (
    <a
      href="http://map.ezsmp.live"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-green-500 z-20 ${buttonPosition()}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Map size={24} />
      {isHovered && !isMobile && (
        <span className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded whitespace-nowrap">
          View World Map
        </span>
      )}
    </a>
  );
};

export default MapButton;