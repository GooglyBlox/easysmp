'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const images = [
  "/image1.png",
  "/image2.png",
  "/image3.png",
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative">
      <div className="fixed-size-container">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Background ${index + 1}`}
            fill
            objectFit="cover"
            quality={100}
            sizes="100vw"
            priority={index === 0}
            className={`transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold text-white text-shadow">EasySMP</h1>
          <p className="mb-8 text-2xl text-white text-shadow">Website Coming Soon!</p>
          <p className="mb-8 text-xl text-gray-100 text-shadow">
            We&apos;re working hard to bring you an amazing website experience. Stay tuned!
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="https://discord.gg/easysmp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-6 py-3 text-xl font-semibold rounded-full transition-colors duration-300 hover:bg-gray-200"
            >
              Join our Discord
            </Link>
            <Link
              href="https://www.paypal.com/ncp/payment/QJRSMY82RCXVG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white px-6 py-3 text-xl font-semibold rounded-full transition-colors duration-300 hover:bg-blue-600"
            >
              Looking to Donate?
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}