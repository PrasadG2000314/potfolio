import React from 'react';
import { motion, useAnimationControls } from 'framer-motion';

interface Language {
  name: string;
  color: string;
  scale: number;
}

const languages: Language[] = [
  { name: 'JavaScript', color: 'text-yellow-400', scale: 1.2 },
  { name: 'TypeScript', color: 'text-blue-400', scale: 1.1 },
  { name: 'React', color: 'text-cyan-400', scale: 1.3 },
  { name: 'Node.js', color: 'text-green-400', scale: 1.15 },
  { name: 'Python', color: 'text-yellow-300', scale: 1.25 },
  { name: 'SQL', color: 'text-orange-400', scale: 1.1 },
  { name: 'MongoDB', color: 'text-green-500', scale: 1.2 },
  { name: 'GraphQL', color: 'text-pink-400', scale: 1.15 },
  { name: 'Docker', color: 'text-blue-500', scale: 1.1 },
  { name: 'AWS', color: 'text-orange-500', scale: 1.2 }
];

const LanguageCloud = () => {
  const controls = useAnimationControls();

  const handleHover = async (index: number) => {
    await controls.start(index.toString(), {
      scale: 1.2,
      y: -10,
      transition: { type: "spring", stiffness: 300 }
    });
  };

  const handleHoverEnd = async (index: number) => {
    await controls.start(index.toString(), {
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300 }
    });
  };

  return (
    <div className="relative h-48 flex items-center justify-center mb-12">
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 to-transparent" />
      <div className="relative flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {languages.map((lang, index) => (
          <motion.div
            key={lang.name}
            custom={index}
            initial={{ opacity: 0, y: 20 }}
            animate={[
              controls,
              {
                opacity: 1,
                y: 0,
                transition: {
                  delay: index * 0.1
                }
              }
            ]}
            whileHover={{
              scale: lang.scale,
              transition: { type: "spring", stiffness: 300 }
            }}
            onHoverStart={() => handleHover(index)}
            onHoverEnd={() => handleHoverEnd(index)}
            className={`
              ${lang.color} 
              relative 
              text-sm md:text-base 
              font-mono 
              px-4 
              py-2 
              rounded-xl
              bg-white/5 
              backdrop-blur-sm
              shadow-lg
              hover:bg-white/10 
              transition-colors
              cursor-default
              transform-gpu
              hover:shadow-xl
              hover:shadow-${lang.color}/20
            `}
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
          >
            <motion.span
              className="block"
              animate={{
                rotateX: [0, 10, 0],
                rotateY: [0, 15, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.2
              }}
            >
              {lang.name}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LanguageCloud;