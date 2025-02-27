import React from 'react';
import { motion } from 'framer-motion';

export function MasalaLoader() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center z-50">
      <div className="relative">
        {/* Masala Pouring Animation */}
        <div className="relative w-32 h-48">
          {/* Container */}
          <motion.div
            className="absolute bottom-0 w-32 h-32 border-4 border-orange-600 rounded-lg bg-white"
            animate={{ rotateZ: [0, -5, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Pouring Spices */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-8"
            initial={{ y: -20 }}
            animate={{ y: 100 }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  backgroundColor: `hsl(${20 + i * 5}, 70%, 50%)`,
                  top: i * 8,
                  left: i % 2 ? '25%' : '75%',
                }}
                animate={{
                  opacity: [1, 0],
                  scale: [1, 0.8],
                }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  repeat: Infinity,
                }}
              />
            ))}
          </motion.div>

          {/* Accumulated Spices */}
          <motion.div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-16 bg-gradient-to-t from-orange-600 to-orange-500 rounded-lg"
            animate={{
              height: [16, 24, 16],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Loading Text */}
        <motion.div
          className="text-center mt-8"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <h2 className="text-2xl font-medium text-orange-800 mb-2">
            Adding Flavors...
          </h2>
          <p className="text-orange-600">
            Preparing your spice experience
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-orange-400"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
}