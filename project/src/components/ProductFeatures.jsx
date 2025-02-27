import React from 'react';
import { Star, Hand, Trash2, Globe, ShieldCheck, Package } from 'lucide-react';
import { Feature } from './Feature';

const leftFeatures = [
  {
    icon: Hand,
    title: "PERFECTLY PORTIONED",
    description: "Stop wasting product by using more sustainable portions that you need."
  },
  {
    icon: Star,
    title: "BETTER FOR YOU",
    description: "Natural ingredients mean we can use less harmful additives and still protect your health."
  },
  {
    icon: Trash2,
    title: "ECO-FRIENDLY",
    description: "Our products leave less waste in your bin because we prioritize what matters most."
  }
];

const rightFeatures = [
  {
    icon: Package,
    title: "TRAVEL-SAFE",
    description: "No more leaks! These products fit in your pack and you're good to go."
  },
  {
    icon: Globe,
    title: "EARTH-FRIENDLY",
    description: "Infinitely better for the environment thanks to our sustainable practices."
  },
  {
    icon: ShieldCheck,
    title: "QUALITY ASSURED",
    description: "Every product is tested to ensure it meets our high standards."
  }
];

export function ProductFeatures({ position, start, end }) {
  const features = position === 'left' ? leftFeatures : rightFeatures;
  const displayFeatures = start !== undefined && end !== undefined 
    ? features.slice(start, end)
    : features;
  
  return (
    <>
      {displayFeatures.map((feature) => (
        <Feature
          key={feature.title}
          icon={<feature.icon className="w-6 h-6 text-green-600" />}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </>
  );
}