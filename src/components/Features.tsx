import { motion } from 'framer-motion';
import { Camera, Users, ShieldCheck, Rocket } from 'lucide-react';

const features = [
  {
    icon: <Camera size={48} />,
    title: "Custom World Generation",
    description: "Explore unique and breathtaking landscapes generated specifically for our server.",
  },
  {
    icon: <Users size={48} />,
    title: "Active Community",
    description: "Join a vibrant and friendly community of players from around the world.",
  },
  {
    icon: <ShieldCheck size={48} />,
    title: "Grief Protection",
    description: "Build with peace of mind knowing your creations are safe from griefers using Towny.",
  },
  {
    icon: <Rocket size={48} />,
    title: "Regular Events",
    description: "Participate in exciting server-wide events, competitions, and challenges.",
  },
];

const Features = () => {
  return (
    <section id="features" className="section bg-gray-900 bg-opacity-80 py-20">
      <div className="section-content">
        <motion.h2 
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Server Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800 p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <motion.div 
                className="text-blue-400 mb-4 flex justify-center"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.3 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;