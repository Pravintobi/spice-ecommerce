import React from 'react';
import { Star } from 'lucide-react';

export function BlogRating({ rating }) {
  return (
    <div className="flex justify-center gap-1 mb-12">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}