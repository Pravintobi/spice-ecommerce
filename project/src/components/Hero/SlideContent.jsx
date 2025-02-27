import React from 'react';
import { motion } from 'framer-motion';

export default function SlideContent({ title, description }) {
  return (
    <div className="text-center text-white">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl"
      >
        {description}
      </motion.p>
    </div>
  );
}