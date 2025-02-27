import React from 'react';
import { Timer, X } from 'lucide-react';
import { useState } from 'react';
import { CountdownTimer } from './CountdownTimer';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollingText } from './ScrollingText';

export function OfferBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="bg-gradient-to-r from-orange-600 to-orange-500 text-white overflow-hidden"
      >
        <div className="relative py-2">
          <ScrollingText>
            <div className="flex items-center gap-4 px-8">
              <Timer size={16} className="animate-pulse" />
              <span>Flash Sale: Get 20% off on all spices! Use code</span>
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="bg-white text-orange-600 px-2 py-0.5 rounded-md font-bold"
              >
                SPICY20
              </motion.span>
              <span>| Ends in</span>
              <CountdownTimer />
            </div>
          </ScrollingText>
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors z-10"
            aria-label="Close offer banner"
          >
            <X size={16} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}