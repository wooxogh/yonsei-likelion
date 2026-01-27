import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '소개', href: '#about' },
    { name: '프로젝트', href: '#projects' },
    { name: '활동', href: '#activities' },
    { name: '트랙', href: '#tracks' },
    { name: '일정', href: '#timeline' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tighter text-white">
            LIKELION <span className="text-yonsei-light">YONSEI</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors hover:scale-105 transform"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://forms.google.com" 
            target="_blank" 
            rel="noreferrer"
            className="bg-likelion-orange hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg shadow-likelion-orange/30"
          >
            14기 지원하기
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-white/10 p-6 flex flex-col gap-4 animate-fade-in-down h-screen">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-300 hover:text-white text-lg font-medium py-2 border-b border-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://forms.google.com" 
            className="bg-likelion-orange text-white px-5 py-3 rounded-lg text-center font-bold mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            14기 지원하기
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;