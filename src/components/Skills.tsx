import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { 
  Code2, 
  Cpu, 
  CheckCircle2, 
  Briefcase, 
  Layout, 
  Database, 
  ShieldCheck, 
  Globe, 
  Zap, 
  Users, 
  Award,
  Terminal
} from 'lucide-react';

export const Skills: React.FC = () => {
  const getIcon = (group: string) => {
    switch (group.toLowerCase()) {
      case 'frameworks & libraries': return <Layout className="text-blue-400" size={20} />;
      case 'architecture & design': return <Cpu className="text-emerald-400" size={20} />;
      case 'state management': return <Database className="text-orange-400" size={20} />;
      case 'devops & tooling': return <Terminal className="text-rose-400" size={20} />;
      case 'testing & debugging': return <ShieldCheck className="text-purple-400" size={20} />;
      case 'api integration': return <Globe className="text-cyan-400" size={20} />;
      case 'performance & ux': return <Zap className="text-yellow-400" size={20} />;
      case 'agile & collaboration': return <Users className="text-indigo-400" size={20} />;
      case 'leadership': return <Award className="text-pink-400" size={20} />;
      default: return <Code2 className="text-blue-400" size={20} />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Expertise</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my specialized skills in modern frontend architecture and enterprise-grade development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {resumeData.skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-slate-900/40 backdrop-blur-md border border-slate-800/50 p-8 rounded-3xl hover:bg-slate-800/60 hover:border-blue-500/30 transition-all duration-500 shadow-xl flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-2.5 bg-slate-800/80 rounded-xl border border-slate-700 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-500">
                  {getIcon(skillGroup.group)}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {skillGroup.group}
                </h3>
              </div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {skillGroup.items.map((item, i) => (
                  <motion.span
                    key={i}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.15)" }}
                    className="px-3 py-1.5 bg-slate-800/30 text-slate-400 rounded-lg text-xs font-medium border border-slate-700/30 hover:text-blue-300 hover:border-blue-500/30 transition-all duration-300 cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex justify-center"
        >
          <div className="flex items-center gap-3 px-6 py-3 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-slate-400 text-sm font-medium">
              Actively mastering <span className="text-blue-400">Angular 19 & AI-driven UI</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
