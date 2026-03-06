import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { GraduationCap, Award } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 relative z-10 bg-slate-950/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">Academic Background</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-12">
            {resumeData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-10 before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-blue-500 before:rounded-full after:absolute after:left-[7px] after:top-6 after:w-0.5 after:h-full after:bg-slate-800 last:after:hidden"
              >
                <h4 className="text-2xl font-bold text-white">{edu.degree}</h4>
                <p className="text-blue-400 font-semibold text-lg my-2">{edu.institution}</p>
                <p className="text-slate-500 font-medium">{edu.dates}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
