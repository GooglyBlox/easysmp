'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'features', 'join', 'faq'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header backdrop-blur-md bg-gray-800 bg-opacity-70">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-bold">EasySMP</Link>
        
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className="hidden lg:flex space-x-6">
          {['Home', 'About', 'Features', 'Join', 'FAQ'].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className={`nav-link ${activeSection === item.toLowerCase() ? 'active-nav-link' : ''}`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 bg-gray-800 bg-opacity-95 backdrop-blur-md">
            {['Home', 'About', 'Features', 'Join', 'FAQ'].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className={`nav-link-mobile ${activeSection === item.toLowerCase() ? 'active-nav-link' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;