import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDiscord } from 'react-icons/fa';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Join = () => {
  const [activeTab, setActiveTab] = useState('java');

  return (
    <section id="join" className="section bg-gray-800 bg-opacity-80 py-20">
      <div className="section-content text-center">
        <motion.h2 
          className="text-4xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Join EasySMP Today!
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-300 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Ready to start your adventure? Follow these simple steps to join our server:
        </motion.p>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-2xl mx-auto tabs-custom">
          <TabsList className="tabs-list grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="java" className="tabs-trigger">Java Edition</TabsTrigger>
            <TabsTrigger value="bedrock" className="tabs-trigger">Bedrock Edition</TabsTrigger>
          </TabsList>
          
          <TabsContent value="java" className="tabs-content text-left text-gray-300 mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-white">Java Edition Instructions</h3>
            <ol className="list-decimal list-inside space-y-4">
              {[
                "Open Minecraft Java Edition",
                "Click on &ldquo;Multiplayer&rdquo;",
                "Click &ldquo;Add Server&rdquo;",
                "Enter &ldquo;EasySMP&rdquo; as the server name",
                "Enter &ldquo;play.ezsmp.live&rdquo; as the server address",
                "Click &ldquo;Done&rdquo; and join the server!",
              ].map((step, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  dangerouslySetInnerHTML={{ __html: step }}
                />
              ))}
            </ol>
          </TabsContent>
          
          <TabsContent value="bedrock" className="tabs-content text-left text-gray-300 mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-white">Bedrock Edition Instructions</h3>
            <ol className="list-decimal list-inside space-y-4">
              {[
                "Open Minecraft Bedrock Edition",
                "Go to the &ldquo;Servers&rdquo; tab",
                "Scroll down and click &ldquo;Add Server&rdquo;",
                "Enter &ldquo;EasySMP&rdquo; as the server name",
                "Enter &ldquo;play.ezsmp.live&rdquo; as the server address",
                "Leave the port as default (19132)",
                "Click &ldquo;Save&rdquo; and join the server!",
              ].map((step, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  dangerouslySetInnerHTML={{ __html: step }}
                />
              ))}
            </ol>
          </TabsContent>
        </Tabs>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link 
            href="https://discord.gg/easysmp" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="button bg-[#5865f2] text-white hover:bg-[#4752c4] hover:scale-105 transition-all relative w-[50px] h-[50px] rounded-full"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <FaDiscord className="w-8 h-8" />
            </div>
          </Link>
          <Link 
            href="https://www.paypal.com/ncp/payment/QJRSMY82RCXVG" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="button button-secondary hover:scale-105 transition-transform"
          >
            Donate
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Join;