import React from 'react';
import { Link } from 'react-router-dom';

export function ParallaxBanner() {
  return (
    <section className="relative w-screen h-[600px] bg-fixed bg-cover bg-center -mx-4 left-[calc(-50vw+50%)] right-[calc(-50vw+50%)]" 
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2940&auto=format&fit=crop')`
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 transform translate-y-0">
          <div className="relative z-10">
            <h2 className="text-5xl font-bold mb-4">
              Get 10% off
            </h2>
            <p className="text-6xl font-bold mb-8 text-orange-500">
              On all Spicy & Herbs
            </p>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Discover our handpicked selection of the finest spices from around the world, 
              carefully curated to bring authentic flavors to your kitchen.
            </p>
            <div className="space-x-4">
              <Link to="/products" className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors">
                View more
              </Link>
              <Link to="/products" className="inline-block border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-orange-600 transition-colors">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}