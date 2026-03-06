import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Splash: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  const statuses = [
    "Initializing core modules...",
    "Loading Angular components...",
    "Optimizing micro-frontend architecture...",
    "Establishing secure connection...",
    "Rendering Lalit Sawant's Portfolio..."
  ];

  useEffect(() => {
    const duration = 2400;
    const interval = 50;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    const statusTimer = setInterval(() => {
      setStatusIndex(prev => (prev < statuses.length - 1 ? prev + 1 : prev));
    }, duration / statuses.length);

    return () => {
      clearInterval(timer);
      clearInterval(statusTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 w-full max-w-md px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center"
        >
          {/* Logo / Initials */}
          <div className="relative mb-12">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="text-7xl font-bold text-white tracking-tighter font-display relative z-10"
            >
              LS
            </motion.div>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-blue-500 rounded-full blur-3xl -z-10"
            />
          </div>

          {/* Progress Bar Container */}
          <div className="w-full space-y-4">
            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <p className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">System Boot</p>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={statusIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="text-xs font-mono text-slate-400 h-4"
                  >
                    {statuses[statusIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
              <span className="text-xs font-mono text-blue-400">{Math.round(progress)}%</span>
            </div>

            <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 via-blue-400 to-emerald-400"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex justify-between text-[10px] font-mono text-slate-600 uppercase tracking-tighter">
              <span>v10.4.2_stable</span>
              <span>kernel_x64_ready</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scanning Line */}
      <motion.div
        animate={{ top: ['0%', '100%', '0%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-px bg-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-20 pointer-events-none"
      />
    </motion.div>
  );
};
