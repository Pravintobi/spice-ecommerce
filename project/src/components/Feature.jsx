import React from 'react';

export function Feature({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-2">
        {icon}
      </div>
      <h3 className="text-sm font-bold tracking-wider text-green-800 mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}