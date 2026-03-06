import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { Award, ExternalLink } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeData.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-slate-900/40 backdrop-blur-xl rounded-3xl border border-slate-800 hover:border-blue-500/30 transition-all duration-500 shadow-2xl overflow-hidden flex flex-col"
            >
              {cert.image && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                </div>
              )}
              <div className="p-8 flex items-start gap-6">
                <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400 shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <Award size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors">
                    {cert.name}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                    <span>Verified Credential</span>
                    {cert.image ? (
                      <a 
                        href={cert.image} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        View Full <ExternalLink size={14} />
                      </a>
                    ) : (
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
