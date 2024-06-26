'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Info, Users, Award, HelpCircle } from 'lucide-react';
import MobileNavigation from './MobileNavigation';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: Info },
  { href: '/join', label: 'Join', icon: Users },
  { href: '/vote', label: 'Vote', icon: Award },
  { href: '/faq', label: 'FAQ', icon: HelpCircle },
];

const Navigation: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  if (isMobile) {
    return <MobileNavigation />;
  }

  return (
    <nav className="fixed top-0 left-0 h-full z-50 flex items-center">
      <div className="bg-gray-800 h-full w-16 flex flex-col items-center py-4 shadow-lg">
        <div className="flex flex-col items-center space-y-6">
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} isActive={pathname === item.href} />
          ))}
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ href: string; label: string; icon: React.ElementType; isActive: boolean }> = ({ href, label, icon: Icon, isActive }) => (
  <Link href={href} className={`group relative p-2 rounded-md transition-colors duration-200 ${isActive ? 'text-green-500' : 'text-white hover:text-green-400'}`}>
    <Icon className="h-6 w-6" />
    <span className="absolute left-full ml-2 px-2 py-1 bg-gray-700 text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      {label}
    </span>
  </Link>
);

export default Navigation;