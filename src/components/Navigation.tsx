'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 bg-opacity-80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0 text-white font-bold text-xl">
            EasySMP
          </Link>
          <div className="hidden md:flex items-center justify-end flex-1">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/join" className="nav-link">Join</Link>
            <Link href="/vote" className="nav-link">Vote</Link>
            <Link href="/faq" className="nav-link">FAQ</Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="mobile-nav-link">Home</Link>
            <Link href="/about" className="mobile-nav-link">About</Link>
            <Link href="/join" className="mobile-nav-link">Join</Link>
            <Link href="/vote" className="mobile-nav-link">Vote</Link>
            <Link href="/faq" className="mobile-nav-link">FAQ</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;