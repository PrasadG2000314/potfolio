import React from 'react';
import Hero from './components/Hero';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects';
import HobbiesSection from './components/Hobbies/HobbiesSection';
import Contact from './components/Contact';
import Footer from './components/Footer/Footer';
import WaterCursor from './components/Cursor/WaterCursor';
import WaterBackground from './components/Background/WaterBackground';

function App() {
  return (
    <div className="bg-black/90 relative">
      <WaterBackground />
      <WaterCursor />
      <Hero />
      <Profile />
      <Projects />
      <HobbiesSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;