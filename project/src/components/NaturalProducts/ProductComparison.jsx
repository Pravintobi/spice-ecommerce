import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const comparisonData = [
  {
    aspect: "Flavor Profile",
    natural: "Rich, authentic taste",
    processed: "Artificial flavoring"
  },
  {
    aspect: "Health Benefits",
    natural: "Full nutritional value",
    processed: "Reduced nutrients"
  },
  {
    aspect: "Shelf Life",
    natural: "Natural preservation",
    processed: "Chemical preservatives"
  },
  {
    aspect: "Environmental Impact",
    natural: "Eco-friendly processing",
    processed: "Industrial processing"
  }
];

export function ProductComparison() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div 
        className="bg-white rounded-xl shadow-xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-3 text-center py-4 bg-orange-900 text-white">
          <div className="font-semibold">Aspect</div>
          <div className="font-semibold">Our Natural Products</div>
          <div className="font-semibold">Processed Products</div>
        </div>
        
        {comparisonData.map((item, index) => (
          <motion.div 
            key={item.aspect}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`grid grid-cols-3 py-4 ${
              index % 2 === 0 ? 'bg-orange-50' : 'bg-white'
            }`}
          >
            <div className="px-4 font-medium text-orange-900">{item.aspect}</div>
            <div className="px-4 flex items-center justify-center gap-2 text-green-600">
              <Check size={20} />
              {item.natural}
            </div>
            <div className="px-4 flex items-center justify-center gap-2 text-red-500">
              <X size={20} />
              {item.processed}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}