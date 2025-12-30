import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tracks from './components/Tracks';
import Timeline from './components/Timeline';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-likelion-orange selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Tracks />
      <Timeline />
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;