import React, { useState } from 'react';

export function ProductDescription({ product }) {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = {
    description: product.description,
    additional: `Weight: Available in 250gm, 500gm, 1kg
Storage: Store in a cool, dry place
Shelf Life: 12 months
Country of Origin: India`,
    reviews: `Average Rating: ${product.rating}/5
Based on ${product.reviews} reviews
Most customers praise the authentic flavor and aroma.`,
  };

  return (
    <div className="mt-12">
      {/* Tab Navigation */}
      <div className="border-b">
        <div className="flex gap-8">
          {Object.keys(tabs).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-2 capitalize ${
                activeTab === tab
                  ? 'border-b-2 border-orange-500 text-orange-600'
                  : 'text-gray-500 hover:text-orange-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      {/* Tab Content */}
      <div className="py-6 whitespace-pre-line">
        {tabs[activeTab]}
      </div>
    </div>
  );
}
