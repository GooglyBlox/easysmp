'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import MinecraftButton from '../components/MinecraftButton';
import ServerStatus from '../components/ServerStatus';

export default function Home() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';

    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-8 text-center shadow-text">
        Welcome to EasySMP
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-12 text-center max-w-2xl text-gray-300 shadow-text">
        Experience Minecraft like never before on our friendly and exciting server!
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-12">
        <Link href="/join">
          <MinecraftButton className="text-lg sm:text-xl px-6 sm:px-8 py-2 sm:py-3">
            Join Now
          </MinecraftButton>
        </Link>
        <Link href="/about">
          <MinecraftButton className="text-lg sm:text-xl px-6 sm:px-8 py-2 sm:py-3 bg-blue-600 border-blue-700 hover:bg-blue-500 hover:border-blue-600">
            Learn More
          </MinecraftButton>
        </Link>
      </div>
      <ServerStatus />
    </div>
  );
}