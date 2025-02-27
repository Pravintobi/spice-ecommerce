import React from 'react';
import { motion } from 'framer-motion';

export function LeafyDivider() {
  return (
    <div className="flex items-center justify-center my-16">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="w-64 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent"
      />
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        whileInView={{ scale: 1, rotate: 360 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-8 h-8 mx-4 text-orange-400"
      >
        ❋
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="w-64 h-px bg-gradient-to-r from-orange-300 via-orange-300 to-transparent"
      />
    </div>
  );
}