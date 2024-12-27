import React, { useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

interface Emoji {
  id: number;
  symbol: string;
  x: number;
  delay: number;
}

const emojis = ['⚡', '💻', '🚀', '🎨', '⚛️', '🔥', '✨', '💡', '🎯', '🌟'];

const EmojiWaterfall = () => {
  const [fallingEmojis, setFallingEmojis] = useState<Emoji[]>([]);
  const controls = useAnimationControls();

  const createEmoji = () => {
    const id = Date.now();
    const x = Math.random() * 100; // Random position across width
    const delay = Math.random() * 0.5;
    const symbol = emojis[Math.floor(Math.random() * emojis.length)];
    
    return { id, symbol, x, delay };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFallingEmojis(prev => {
        const newEmojis = [...prev, createEmoji()];
        // Keep only last 10 emojis for performance
        return newEmojis.slice(-10);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {fallingEmojis.map((emoji) => (
        <motion.div
          key={emoji.id}
          initial={{ y: -20, x: `${emoji.x}%`, opacity: 1, scale: 0 }}
          animate={{
            y: '120vh',
            opacity: [1, 1, 0],
            scale: [1, 1, 0.5],
            rotate: [0, 360]
          }}
          transition={{
            duration: 4,
            delay: emoji.delay,
            ease: [0.4, 0, 0.2, 1]
          }}
          onAnimationComplete={() => {
            setFallingEmojis(prev => prev.filter(e => e.id !== emoji.id));
          }}
          className="absolute text-2xl"
        >
          {emoji.symbol}
        </motion.div>
      ))}
    </div>
  );
};

export default EmojiWaterfall;