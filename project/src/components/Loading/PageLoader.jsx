import React from 'react';
import { motion } from 'framer-motion';

export function PageLoader({ type = 'spices' }) {
  const loaderContent = {
    spices: {
      title: 'Loading Spices...',
      items: ['Cardamom', 'Turmeric', 'Pepper', 'Cinnamon', 'Clove']
    },
    cart: {
      title: 'Preparing Cart...',
      items: ['Checking Items', 'Calculating Total', 'Getting Discounts', 'Almost Ready']
    },
    checkout: {
      title: 'Setting Up Checkout...',
      items: ['Securing Connection', 'Loading Payment Options', 'Getting Shipping Rates']
    },
    products: {
      title: 'Loading Products...',
      items: ['Fetching Items', 'Applying Filters', 'Getting Best Prices']
    }
  };

  const content = loaderContent[type] || loaderContent.spices;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 mx-auto mb-8 relative"
        >
          {[0, 60, 120, 180, 240, 300].map((degree) => (
            <motion.div
              key={degree}
              className="absolute w-4 h-4 rounded-full"
              style={{
                backgroundColor: `hsl(${degree}, 70%, 50%)`,
                transform: `rotate(${degree}deg) translate(40px)`,
              }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: degree / 360,
              }}
            />
          ))}
        </motion.div>
        
        <motion.h2
          className="text-2xl font-medium text-orange-800 mb-4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {content.title}
        </motion.h2>

        <div className="space-y-2">
          {content.items.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-orange-600"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}