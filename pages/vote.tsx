import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import "../src/app/globals.css";
import "./vote.css";

const FlexibleImage = ({ icon, title, className }: { icon: string; title: string; className: string }) => {
  const imageExtensions = ['png', 'jpg', 'jpeg', 'avif', 'webp', 'ico'];
  const [currentExtIndex, setCurrentExtIndex] = React.useState(0);

  const handleError = () => {
    if (currentExtIndex < imageExtensions.length - 1) {
      setCurrentExtIndex(currentExtIndex + 1);
    }
  };

  return (
    <Image
      src={`/icons/${icon}.${imageExtensions[currentExtIndex]}`}
      alt={title}
      width={48}
      height={48}
      className={className}
      onError={handleError}
    />
  );
};

const VotingCard = ({ href, title, icon }: { href: string; title: string; icon: string }) => (
  <motion.div
    className="vote-card bg-gray-800 rounded-lg overflow-hidden shadow-lg"
    whileHover={{ scale: 1.05, rotate: 2 }}
    whileTap={{ scale: 0.95 }}
  >
    <a href={href} target="_blank" rel="noopener noreferrer" className="block p-6">
      <div className="flex items-center justify-between mb-4">
        <FlexibleImage icon={icon} title={title} className="w-12 h-12" />
        <ExternalLink className="text-gray-400" size={20} />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">Click to vote and support EasySMP!</p>
    </a>
  </motion.div>
);

const VotePage = () => {
  const votingSites = [
    { href: "https://www.curseforge.com/servers/minecraft/game/easy-smp/vote", title: "CurseForge", icon: "curseforge" },
    { href: "https://minelist.net/vote/4422", title: "Minelist", icon: "minelist" },
    { href: "https://topminecraftservers.org/server/37895", title: "Top Minecraft Servers", icon: "topminecraftservers" },
    { href: "https://topg.org/minecraft-servers/server-664463", title: "TopG", icon: "topg" },
    { href: "https://minecraft-mp.com/server/332862/vote/", title: "Minecraft-MP", icon: "minecraft-mp" },
    { href: "https://minecraftservers.org/vote/663064", title: "MinecraftServers.org", icon: "minecraftservers" },
  ];

  return (
    <div className="vote-page min-h-screen flex items-center justify-center py-20 px-4">
      <div className="vote-container max-w-6xl w-full mx-auto p-8">
        <motion.h1 
          className="vote-title text-6xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Vote for EasySMP
        </motion.h1>
        <motion.p 
          className="vote-description text-2xl mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Your vote powers our community! Help us grow and get awesome rewards.
        </motion.p>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {votingSites.map((site, index) => (
            <VotingCard key={index} {...site} />
          ))}
        </motion.div>
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link href="/" className="back-link text-xl hover:underline">
            ← Return to EasySMP
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default VotePage;