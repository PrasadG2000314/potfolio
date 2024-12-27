import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-400">Have a project in mind? Let's bring it to life.</p>
        </motion.div>

        <div className="flex justify-center space-x-8">
          {[
            { icon: <Mail size={24} />, href: "mailto:your.email@example.com" },
            { icon: <Github size={24} />, href: "https://github.com" },
            { icon: <Linkedin size={24} />, href: "https://linkedin.com" },
            { icon: <Twitter size={24} />, href: "https://twitter.com" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-colors"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;