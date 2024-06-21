import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

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
        <p>You can vote for our server on various platforms. We&apos;ve created a dedicated voting page to make it easier for you.</p>
        <Link href="/vote" className="text-blue-400 hover:underline mt-2 inline-block">
          Go to Voting Page
        </Link>
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

const FAQItem: React.FC<{ question: string; answer: React.ReactNode }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="border-b border-gray-700 last:border-b-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
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
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="section bg-gray-900 bg-opacity-80 py-20">
      <div className="section-content">
        <motion.h2 
          className="text-5xl font-bold text-white mb-12 text-center minecraft-font"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto bg-gray-800 bg-opacity-70 rounded-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;