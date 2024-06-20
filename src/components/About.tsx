import { motion } from "framer-motion";
import { Shield, Users, Star } from 'lucide-react';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="section bg-gray-800 bg-opacity-80 py-20">
      <div className="section-content">
        <motion.h2 
          className="text-4xl font-bold text-white mb-12 text-center"
          {...fadeIn}
        >
          About EasySMP
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
            <p className="text-gray-300 mb-6 text-lg">
              EasySMP is a friendly and engaging Minecraft server community where players can explore, build, and connect with others in a vast and exciting world.
            </p>
            <p className="text-gray-300 mb-6 text-lg">
              Our server is designed to provide a balanced and enjoyable experience for both new and experienced players, with a focus on community-driven events and collaborative projects.
            </p>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
            <h3 className="text-2xl font-semibold text-white mb-6">Server Highlights:</h3>
            <ul className="space-y-4">
              {[
                { icon: Shield, text: "Protected areas for peaceful building" },
                { icon: Users, text: "Active and helpful staff team" },
                { icon: Star, text: "Regular community events and competitions" },
              ].map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.2 }}
                >
                  <item.icon className="mr-4 text-blue-400" size={24} />
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;