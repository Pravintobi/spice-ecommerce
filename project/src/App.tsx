import React from 'react';
import { ProductSection } from './components/ProductSection';
import { SpiceGrid } from './components/SpiceGrid/SpiceGrid';
import { IMAGES } from './constants/images';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
         <SpiceGrid />
        <h1 className="text-4xl font-serif text-center mb-16">Why Natural Products are Better</h1>
        <ProductSection title="Natural Spices" imageSrc={IMAGES.spice} />
       
      </div>
    </div>
  );
}

export default App;