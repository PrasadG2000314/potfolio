import React from 'react';
import LanguageCloud from './LanguageCloud';
import FooterLinks from './FooterLinks';
import EmojiWaterfall from './EmojiWaterfall';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white py-16">
      <EmojiWaterfall />
      <div className="container mx-auto px-6">
        <LanguageCloud />
        <FooterLinks />
      </div>
    </footer>
  );
};

export default Footer;