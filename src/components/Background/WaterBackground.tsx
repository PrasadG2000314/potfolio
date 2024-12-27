import React from 'react';
import { motion } from 'framer-motion';

const WaterBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <svg className="absolute w-0 h-0">
        <filter id="turbulence">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.02"
            numOctaves="3"
            seed="1"
          >
            <animate
              attributeName="baseFrequency"
              dur="60s"
              values="0.01 0.02;0.02 0.04;0.01 0.02"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="30" />
        </filter>
      </svg>
      
      {/* Animated water layers */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            delay: i * 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            background: `radial-gradient(circle at ${50 + i * 10}% ${50 + i * 10}%, rgba(59, 130, 246, 0.3), transparent 70%)`,
            filter: 'url(#turbulence)',
          }}
        />
      ))}

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            animate={{
              y: [-20, -40, -20],
              x: [0, 10, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default WaterBackground;