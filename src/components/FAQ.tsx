import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Do you support Java and Bedrock players?",
    answer: "Yes, we utilize a plugin that enables crossplay between Java and Bedrock editions. While this integration is generally stable, occasional issues may arise for Bedrock players."
  },
  {
    question: "How do I join the server?",
    answer: "To join, simply use the server IP provided in our info section. The server is public, so feel free to invite your friends!"
  },
  {
    question: "How do I vote for the server?",
    answer: (
      <div>
        <p>You can vote for our server on the following platforms:</p>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li><a href="https://www.curseforge.com/servers/minecraft/game/easy-smp/vote" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">CurseForge</a></li>
          <li><a href="https://minelist.net/vote/4422" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Minelist</a></li>
          <li><a href="https://topminecraftservers.org/server/37895" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Top Minecraft Servers</a></li>
          <li><a href="https://topg.org/minecraft-servers/server-664463" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">TopG</a></li>
          <li><a href="https://minecraft-mp.com/server/332862/vote/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Minecraft-MP</a></li>
          <li><a href="https://minecraftservers.org/vote/663064" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">MinecraftServers.org</a></li>
        </ul>
        <p className="mt-4">Voting helps us reach more players and supports the server's growth. We appreciate your support!</p>
      </div>
    )
  },
  {
    question: "Where is the server located?",
    answer: "Our server is hosted by ApexHosting and is located in Montreal, Quebec."
  },
  {
    question: "What should I do if I encounter a bug or need support?",
    answer: "If you experience any issues or require assistance, please create a support ticket in our Discord server, providing your username and a detailed description of the problem."
  },
  {
    question: "How do you handle player data and privacy?",
    answer: "We collect minimal data necessary for server operation and moderation. Your IP address is logged for security purposes only, such as implementing IP bans if required."
  },
  {
    question: "What are Infernals?",
    answer: "Infernals are enhanced versions of vanilla mobs with special abilities and improved attributes. They offer unique challenges and drop both vanilla and custom items."
  },
  {
    question: "How can I donate to support the server?",
    answer: "To make a donation, please open a ticket in our Discord server. An admin will provide you with the appropriate payment link based on your preferred method."
  },
  {
    question: "Are staff applications currently open?",
    answer: "Staff applications open periodically based on server needs. Keep an eye on our announcements for information about upcoming application periods."
  }
];

const FAQItem = ({ question, answer }: { question: string, answer: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left text-white hover:text-yellow-400 transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold minecraft-font">{question}</span>
        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="pb-4 text-gray-300 minecraft-font"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className="section bg-gray-900 bg-opacity-80 py-20">
      <div className="section-content">
        <h2 className="text-5xl font-bold text-white mb-12 text-center minecraft-font">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto bg-gray-800 bg-opacity-70 rounded-lg p-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;