import React from 'react';
import { motion } from 'framer-motion';
import { LeafyDivider } from './LeafyDivider';
import { FallingLeaves } from './FallingLeaves';
import { ProductSection } from '../ProductSection';
import { IMAGES } from '../../constants/images';

export function NaturalProductsSection() {
  return (
    <section className="relative w-screen -mx-4 left-[calc(-50vw+50%)] right-[calc(-50vw+50%)]">
      {/* Background Color Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-orange-100 to-orange-50" />
      
      {/* Falling Leaves Animation */}
      <FallingLeaves />

      {/* Content Container */}
      <div className="relative py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block relative"
            >
              <h2 className="text-6xl font-serif text-orange-900 mb-6 leading-tight">
                Why Natural Products are Better
                <div className="absolute -right-8 -top-8 w-16 h-16 bg-orange-100 rounded-full -z-10" />
                <div className="absolute -left-8 -bottom-8 w-20 h-20 bg-orange-50 rounded-full -z-10" />
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Experience the difference of pure, natural ingredients
              </p>
            </motion.div>
          </div>

          <LeafyDivider />
          
          {/* Product Section */}
          <div className="mb-12">
            <ProductSection title="Natural Spices" imageSrc={IMAGES.spice} />
          </div>
        </div>
      </div>
    </section>
  );
}