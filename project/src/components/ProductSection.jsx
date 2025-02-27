import React from 'react';
import { ProductFeatures } from './ProductFeatures';

export function ProductSection({ title, imageSrc }) {
  return (
    <div className="relative min-h-[800px] mb-24"> {/* Increased height and margin */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-[800px] h-[800px]"> {/* Increased width and height */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[120px] space-y-32 w-72"> {/* Adjusted spacing and width */}
            <ProductFeatures position="left" start={1} end={2} />
          </div>

          <div className="absolute left-[15%] top-[15%] -translate-x-1/2 -translate-y-1/2 w-72">
            <ProductFeatures position="left" start={0} end={1} />
          </div>

          <div className="absolute left-[15%] bottom-[15%] -translate-x-1/2 translate-y-1/2 w-72">
            <ProductFeatures position="left" start={2} end={3} />
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[120px] space-y-32 w-72">
            <ProductFeatures position="right" start={1} end={2} />
          </div>

          <div className="absolute right-[15%] top-[15%] translate-x-1/2 -translate-y-1/2 w-72">
            <ProductFeatures position="right" start={0} end={1} />
          </div>

          <div className="absolute right-[15%] bottom-[15%] translate-x-1/2 translate-y-1/2 w-72">
            <ProductFeatures position="right" start={2} end={3} />
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96"> {/* Increased image container width */}
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-auto transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}