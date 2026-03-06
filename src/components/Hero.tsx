import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { ChevronDown, Download, MapPin, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScroll = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 relative pt-20 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-sm text-slate-400 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 font-display"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-400">
              {resumeData.basics.name}
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-blue-400 font-medium mb-8 flex items-center justify-center lg:justify-start gap-3 flex-wrap"
          >
            {resumeData.basics.title.split('|').map((item, index) => (
              <span key={index} className="flex items-center gap-3">
                {index > 0 && <span className="text-slate-700 text-sm">•</span>}
                <span className="whitespace-nowrap">{item.trim()}</span>
              </span>
            ))}
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="bg-slate-900/40 backdrop-blur-md border border-slate-800/50 p-6 md:p-8 rounded-2xl max-w-2xl mb-10 shadow-2xl"
          >
            <p className="text-slate-300 text-lg leading-relaxed text-justify">
              {resumeData.basics.summary}
            </p>
            <div className="mt-6 flex items-center justify-center lg:justify-start gap-2 text-slate-500 text-sm">
              <MapPin size={14} />
              {resumeData.basics.location}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
          >
            <button
              onClick={handleScroll}
              className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative flex items-center gap-2">
                View Experience
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <a href="src/components/lalitResume.pdf" target="_blank"> <button
              
              className="group w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-slate-800/50 text-white rounded-full font-semibold transition-all border border-slate-600 hover:border-blue-400/50 flex items-center justify-center gap-2 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
            >
              Download Resume
              <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            </button></a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">
            {/* Decorative rings */}
            <div className="absolute inset-0 border-2 border-blue-500/20 rounded-[3rem] rotate-6 animate-pulse" />
            <div className="absolute inset-0 border-2 border-indigo-500/20 rounded-[3rem] -rotate-3 animate-pulse delay-700" />
            
            {/* Image Container */}
            <div className="absolute inset-4 bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl group">
              <img 
                // src="https://picsum.photos/seed/professional/800/800" 
                src="src/components/lalitPf.jpeg"
                alt={resumeData.basics.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Tech Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 p-4 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl shadow-xl"
            >
              <div className="text-blue-400 font-bold text-xl">10+</div>
              <div className="text-slate-500 text-[10px] uppercase tracking-widest">Years Exp</div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 p-4 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl shadow-xl"
            >
              <div className="text-emerald-400 font-bold text-lg">Angular</div>
              <div className="text-slate-500 text-[10px] uppercase tracking-widest">Expertise</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};