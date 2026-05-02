import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 5;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ y: '-100%', transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center p-8"
        >
          <div className="w-full max-w-md">
            <div className="flex justify-between items-end mb-4">
              <div className="text-xl font-black tracking-tighter text-white">
                <span className="text-deep-blue">M</span>S<span className="text-deep-blue">2</span>
              </div>
              <div className="font-label-mono text-secondary text-2xl">
                {Math.min(progress, 100)}%
              </div>
            </div>
            
            <div className="w-full h-1.5 bg-white/10 relative overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-safety-red"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: Math.min(progress, 100) / 100 }}
                transition={{ duration: 0.1 }}
                style={{ transformOrigin: 'left' }}
              />
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="font-label-mono text-[10px] text-white/40 uppercase tracking-widest">
                System: Initializing...
                <br />
                Core: Structural Grid Loaded
                <br />
                Assets: Heavy Duty
              </div>
              <div className="font-label-mono text-[10px] text-white/40 uppercase tracking-widest text-right">
                Status: Functional
                <br />
                Mode: Industrial
                <br />
                Location: Virac, PH
              </div>
            </div>
          </div>

          <div className="absolute bottom-12 left-12 right-12 flex justify-between border-t border-white/10 pt-4">
            <div className="font-label-mono text-[10px] text-white/20 uppercase tracking-widest">
              © 2026 MS2 BUILDER & SUPPLIES INC.
            </div>
            <div className="font-label-mono text-[10px] text-white/20 uppercase tracking-widest">
              Digital Portal V2.0
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
