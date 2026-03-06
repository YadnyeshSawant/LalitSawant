import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { Trophy, TrendingUp } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 px-6 relative z-10 bg-slate-950/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">Impact & Awards</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {resumeData.achievements.map((ach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-slate-900 to-slate-900/50 p-8 rounded-3xl border border-slate-800 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <TrendingUp size={64} className="text-blue-500" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-3 relative z-10">{ach.item}</h3>
              <p className="text-slate-400 relative z-10">{ach.context}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resumeData.awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800/50 flex items-start gap-4"
            >
              <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 shrink-0">
                <Trophy size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">{award.name}</h4>
                <p className="text-sm text-slate-400">{award.context}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
