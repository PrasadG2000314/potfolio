import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface HobbyCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  color: string;
}

const HobbyCard = ({ title, description, Icon, color }: HobbyCardProps) => {
  return (
    <motion.div
      className={`relative bg-white/5 backdrop-blur-lg rounded-xl p-6 overflow-hidden`}
      whileHover={{ 
        scale: 1.05,
        rotateY: 10,
        rotateX: 5
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      <div className={`absolute top-0 right-0 w-32 h-32 rounded-full ${color} opacity-20 blur-2xl transform -translate-y-1/2 translate-x-1/2`} />
      
      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
          className={`inline-block p-3 rounded-lg ${color} bg-opacity-20 mb-4`}
        >
          <Icon size={24} className="text-white" />
        </motion.div>
        
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default HobbyCard;