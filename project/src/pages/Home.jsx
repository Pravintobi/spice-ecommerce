import React, { useState, useEffect } from 'react';
import { ProductSection } from '../components/ProductSection';
import { SpiceGrid } from '../components/SpiceGrid/SpiceGrid';
import { BlogPost } from '../components/BlogPost/BlogPost';
import { ProductOffers } from '../components/ProductOffers';
import { ParallaxBanner } from '../components/ParallaxBanner/ParallaxBanner';
import { IMAGES } from '../constants/images';
import ImageSlider from '../components/Hero/imageSlider';
import { OfferBanner } from '../components/OfferBanner/OfferBanner';
import { MasalaLoader } from '../components/Loading/MasalaLoader';
import { NaturalProductsSection } from '../components/NaturalProducts/NaturalProductsSection';
import FeatureSection from '../components/FeatureSection';

export function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <MasalaLoader />;
  }

  return (
    <div className="min-h-screen">
      <OfferBanner />
      
      {/* Parallax Hero Section */}
      <div className="sticky top-0 -z-10">
        <ImageSlider />
      </div>

      {/* Main Content */}
      <div className="relative bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <SpiceGrid />
          <NaturalProductsSection />
        </div>
        
        <ParallaxBanner />
        
        <div className="bg-gray-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <ProductOffers />
            <FeatureSection />
            <BlogPost />
          </div>
        </div>
      </div>
    </div>
  );
}