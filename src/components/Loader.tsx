import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = performance.now();
    const duration = 1000; // 1 second total duration

    const updateProgress = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const currentProgress = Math.min(Math.floor((elapsedTime / duration) * 100), 100);
      
      setProgress(currentProgress);

      if (elapsedTime < duration) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          onComplete();
        }, 150);
      }
    };

    const animFrame = requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(animFrame);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] bg-[#0C0C0C] flex flex-col items-center justify-center px-4 font-kanit text-[#D7E2EA] select-none"
    >
      {/* Top Tagline */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#D7E2EA]/50 mb-6 font-light"
      >
        Loading Experience
      </motion.div>

      {/* Main Counter Display with Adequate Vertical Padding */}
      <div className="relative flex items-baseline py-4 px-6 overflow-visible">
        <span
          className="font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] to-[#8899A6] tracking-tight leading-[1.1] inline-block py-2"
          style={{ fontSize: 'clamp(4.5rem, 13vw, 10rem)' }}
        >
          {progress}
        </span>
        <span
          className="font-bold text-[#646973] ml-2 leading-[1.1] inline-block py-2"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.8rem)' }}
        >
          %
        </span>
      </div>

      {/* Sleek Glowing Progress Bar */}
      <div className="w-48 sm:w-64 md:w-80 h-1.5 bg-[#1A1A1A] rounded-full overflow-hidden mt-6 relative">
        <motion.div
          className="h-full bg-gradient-to-r from-[#B600A8] via-[#6366F1] to-[#38BDF8] rounded-full shadow-[0_0_12px_rgba(182,0,168,0.8)]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </motion.div>
  );
};
