import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { Briefcase, MapPin, Calendar, Terminal, Cpu, Layers } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 px-6 relative overflow-hidden">
      {/* Tech background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Journey</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-mono">
            &gt; Executing career_path.sh ...
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 md:-translate-x-1/2 hidden sm:block" />

          <div className="space-y-20">
            {resumeData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 top-0 md:-translate-x-1/2 w-10 h-10 bg-slate-900 border-2 border-blue-500 rounded-xl rotate-45 flex items-center justify-center z-20 shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform hidden sm:flex">
                  <div className="-rotate-45 text-blue-400">
                    {index === 0 ? <Terminal size={18} /> : index === 1 ? <Cpu size={18} /> : <Layers size={18} />}
                  </div>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-[45%] group">
                  <div className="relative bg-slate-900/40 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl hover:border-blue-500/50 transition-all duration-500 shadow-2xl overflow-hidden">
                    {/* Tech accents */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-500/50" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-blue-500/50" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-blue-500/50" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-500/50" />
                    
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <span className="font-mono text-xs text-blue-400 tracking-widest uppercase">
                          {exp.dates}
                        </span>
                        <span className="flex items-center gap-1 text-slate-500 text-xs font-mono">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                          <Briefcase size={16} />
                          {exp.company}
                        </div>
                      </div>

                      <div className="space-y-3 mt-4">
                        {exp.bullets.map((bullet, i) => (
                          <div key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                            <div className="mt-1.5 w-1 h-1 bg-blue-500/50 rounded-full shrink-0" />
                            <p>{bullet}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty space for the other side on desktop */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-slate-900/50 border border-slate-800 rounded-2xl">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-blue-500/20 flex items-center justify-center text-[10px] font-bold text-blue-400">
                  {i === 1 ? 'V' : i === 2 ? 'N' : 'I'}
                </div>
              ))}
            </div>
            <p className="text-slate-400 text-sm font-mono">
              10+ Years of Enterprise Engineering
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
