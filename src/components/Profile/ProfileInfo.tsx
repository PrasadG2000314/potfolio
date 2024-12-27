import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe2, Coffee } from 'lucide-react';

const ProfileInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="text-center md:text-left md:ml-8"
    >
      <h2 className="text-3xl font-bold mb-4">Nipun Gunawardhana</h2>
      <p className="text-gray-400 mb-6">Full Stack Developer & UI/UX Enthusiast</p>
      
      <div className="flex flex-col gap-3">
        {[
          { Icon: Code2, text: "Building robust web applications" },
          { Icon: Globe2, text: "Working with global clients" },
          { Icon: Coffee, text: "Coffee-driven development" }
        ].map(({ Icon, text }, index) => (
          <motion.div
            key={text}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="flex items-center gap-2 text-gray-300"
          >
            <Icon size={18} className="text-blue-400" />
            <span>{text}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProfileInfo;