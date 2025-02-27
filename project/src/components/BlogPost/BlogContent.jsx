import React from 'react';

export function BlogContent({ children }) {
  return (
    <div className="prose prose-orange lg:prose-lg mx-auto">
      {children}
    </div>
  );
}