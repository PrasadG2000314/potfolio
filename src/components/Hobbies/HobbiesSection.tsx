import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Gamepad, Book, Music, Plane, Code } from 'lucide-react';
import HobbyCard from './HobbyCard';

const hobbies = [
  {
    title: 'Photography',
    description: 'Capturing moments and exploring visual storytelling through the lens',
    Icon: Camera,
    color: 'bg-purple-500'
  },
  {
    title: 'Gaming',
    description: 'Exploring virtual worlds and solving complex puzzles',
    Icon: Gamepad,
    color: 'bg-blue-500'
  },
  {
    title: 'Reading',
    description: 'Diving into sci-fi and technical books to expand knowledge',
    Icon: Book,
    color: 'bg-green-500'
  },
  {
    title: 'Music Production',
    description: 'Creating electronic music and experimenting with sound design',
    Icon: Music,
    color: 'bg-red-500'
  },
  {
    title: 'Traveling',
    description: 'Exploring new cultures and gathering inspiration from around the world',
    Icon: Plane,
    color: 'bg-yellow-500'
  },
  {
    title: 'Side Projects',
    description: 'Building fun apps and experimenting with new technologies',
    Icon: Code,
    color: 'bg-cyan-500'
  }
];

const HobbiesSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-black to-gray-900 py-20">
      <motion.div 
        className="absolute inset-0 opacity-30"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
          backgroundSize: ['100% 100%', '120% 120%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.5) 0%, transparent 70%)',
        }}
      />
      
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hobbies & Interests
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <HobbyCard key={index} {...hobby} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HobbiesSection;