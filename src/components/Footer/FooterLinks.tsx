import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const FooterLinks = () => {
  const links = [
    { text: 'Privacy Policy', href: '#' },
    { text: 'Terms of Service', href: '#' },
    { text: 'Blog', href: '#' }
  ];

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-6">
        {links.map((link, index) => (
          <motion.a
            key={link.text}
            href={link.href}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {link.text}
          </motion.a>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-gray-500 flex items-center gap-2"
      >
        Made with <Heart size={16} className="text-red-500" /> in 2024
      </motion.p>
    </div>
  );
};

export default FooterLinks;