import React from 'react';
import { motion } from 'framer-motion';

const ProfileImage = () => {
  return (
    <motion.div
      className="relative w-48 h-48 md:w-64 md:h-64"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border-2 border-blue-500/30"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
      
      {/* Profile picture container */}
      <motion.div
        className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default ProfileImage;