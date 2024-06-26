'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "What game modes does EasySMP offer?",
    answer: "EasySMP is primarily a survival multiplayer server with some custom features and plugins to enhance gameplay. We focus on community-driven experiences and events."
  },
  {
    question: "Is EasySMP compatible with both Java and Bedrock editions?",
    answer: "Yes, EasySMP supports cross-play between Java and Bedrock editions. Players from both versions can join and play together seamlessly."
  },
  {
    question: "How can I protect my builds from griefing?",
    answer: "We use the Towny plugin for land protection. You can create or join a town to protect your builds. We also have staff monitoring for any suspicious activity."
  },
  {
    question: "Are there any rules I should be aware of?",
    answer: "Yes, we have a set of rules to ensure a fair and enjoyable experience for all players. The main rules include no griefing, no hacking/cheating, and being respectful to others. You can find the full list of rules on our Discord server."
  },
  {
    question: "How often do you reset the world or wipe data?",
    answer: "We aim to keep the world running for as long as possible without resets. However, we may occasionally reset certain areas or dimensions to refresh resources. Major resets are announced well in advance."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-8 text-center text-yellow-400 shadow-text">
        Frequently Asked Questions
      </h1>
      <div className="panel max-w-3xl mb-12 w-full">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full text-left p-4 bg-gray-700 rounded-lg focus:outline-none"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h3 className="text-xl font-bold flex justify-between items-center">
                {faq.question}
                <span>{openIndex === index ? '−' : '+'}</span>
              </h3>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-600 rounded-b-lg mt-1">
                <p className="text-lg">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}