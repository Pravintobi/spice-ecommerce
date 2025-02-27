import React from 'react';

export function BlogHeader({ title, date, author, readTime }) {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-serif text-orange-900 mb-4">{title}</h1>
      <div className="flex items-center text-gray-600 space-x-4">
        <span className="text-sm">{author}</span>
        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
        <span className="text-sm">{date}</span>
        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
        <span className="text-sm">{readTime} min read</span>
      </div>
    </div>
  );
}