import React from 'react';
import { motion } from 'framer-motion';

export function ScrollingText({ children }) {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        animate={{
          x: [400, -1000],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="inline-block"
      >
        {children}
      </motion.div>
      <motion.div
        animate={{
          x: [1800, 400],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="inline-block"
      >
        {children}
      </motion.div>
    </div>
  );
}