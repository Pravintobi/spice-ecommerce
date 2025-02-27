import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ProductHeader() {
  return (
    <div className="relative h-[200px] bg-center bg-cover" 
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), 
        url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2940&auto=format&fit=crop')`
      }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4">COLLECTION</h1>
        <div className="flex items-center gap-2">
          <Link to="/" className="hover:text-orange-400">Home</Link>
          <ChevronRight size={20} />
          <span>Products</span>
        </div>
      </div>
    </div>
  );
}