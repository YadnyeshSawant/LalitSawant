import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Experience', href: '#experience' },
    { name: 'Impact', href: '#achievements' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-white tracking-tighter font-display">
          LS<span className="text-blue-500">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:lalitsawant1991@gmail.com"
            className="px-5 py-2 bg-white text-slate-900 rounded-full text-sm font-bold hover:bg-slate-200 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </motion.nav>
  );
};
