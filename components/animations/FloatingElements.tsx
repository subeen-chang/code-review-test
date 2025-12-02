'use client';

import { motion } from 'framer-motion';

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating circles */}
      <motion.div
        className="absolute w-32 h-32 bg-white/10 rounded-full blur-2xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: '10%', left: '10%' }}
      />

      <motion.div
        className="absolute w-48 h-48 bg-pink-300/10 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 120, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: '20%', right: '15%' }}
      />

      <motion.div
        className="absolute w-40 h-40 bg-purple-400/10 rounded-full blur-2xl"
        animate={{
          x: [0, -60, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ bottom: '15%', left: '20%' }}
      />

      <motion.div
        className="absolute w-36 h-36 bg-blue-300/10 rounded-full blur-3xl"
        animate={{
          x: [0, 90, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ bottom: '25%', right: '10%' }}
      />

      {/* Sparkles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}
