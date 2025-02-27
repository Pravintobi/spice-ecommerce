import React from 'react';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  Heart, 
  Sprout, 
  ShieldCheck, 
  Recycle,
  Droplets 
} from 'lucide-react';

const benefits = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Pure ingredients with no artificial additives or preservatives"
  },
  {
    icon: Heart,
    title: "Health Benefits",
    description: "Rich in antioxidants and natural healing properties"
  },
  {
    icon: Sprout,
    title: "Sustainably Sourced",
    description: "Ethically harvested to protect nature and communities"
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description: "Rigorous testing ensures premium quality in every batch"
  },
  {
    icon: Recycle,
    title: "Eco-Friendly",
    description: "Environmentally conscious packaging and processing"
  },
  {
    icon: Droplets,
    title: "Rich in Flavor",
    description: "Authentic taste that enhances every dish naturally"
  }
];

export function NaturalBenefits() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
      {benefits.map((benefit, index) => (
        <motion.div
          key={benefit.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="flex items-start gap-4">
            <div className="bg-orange-100 rounded-lg p-3">
              <benefit.icon className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-orange-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}