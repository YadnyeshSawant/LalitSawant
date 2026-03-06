/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback } from 'react';
import { AnimatePresence } from 'motion/react';
import { Splash } from './components/Splash';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  React.useEffect(() => {
    console.log("App: Component mounted, showSplash is:", showSplash);
  }, [showSplash]);

  const handleSplashComplete = useCallback(() => {
    console.log("App: Splash complete, transitioning to main content");
    setShowSplash(false);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30">
      <AnimatePresence mode="wait">
        {showSplash && (
          <Splash key="splash" onComplete={handleSplashComplete} />
        )}
      </AnimatePresence>

      {!showSplash && (
        <div key="main-content">
          <AnimatedBackground />
          <Navigation />
          <main>
            <Hero />
            <Experience />
            <Achievements />
            <Skills />
            <Certifications />
            <Education />
          </main>
          <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-800/50 relative z-10">
            <p>© {new Date().getFullYear()} Lalit Sawant. All rights reserved.</p>
          </footer>
        </div>
      )}
    </div>
  );
}
