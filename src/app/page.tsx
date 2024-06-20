'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import BackgroundCarousel from "../components/BackgroundCarousel";
import About from "../components/About";
import Features from "../components/Features";
import Join from "../components/Join";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <BackgroundCarousel />
      <div className="absolute inset-0 z-10">
        <section id="home" className="section h-screen flex items-center justify-center">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="mb-4 text-6xl font-bold text-white text-shadow"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              EasySMP
            </motion.h1>
            <motion.p 
              className="mb-8 text-2xl text-white text-shadow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Welcome to our Minecraft Server!
            </motion.p>
            <motion.div 
              className="flex justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Link href="#join" className="button button-primary hover:scale-105 transition-transform">
                Join Now
              </Link>
              <Link href="https://discord.gg/easysmp" target="_blank" rel="noopener noreferrer" className="button button-secondary hover:scale-105 transition-transform">
                Join our Discord
              </Link>
            </motion.div>
          </motion.div>
        </section>
        <About />
        <Features />
        <Join />
        <FAQ />
      </div>
    </main>
  );
}