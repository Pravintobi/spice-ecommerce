import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';
import { BlogNavigation } from './BlogNavigation';
import { BlogRating } from './BlogRating';

export function BlogPost() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentPost = blogPosts[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(blogPosts.length - 1, prev + 1));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-center text-5xl font-serif text-orange-800 mb-4">Blog Post</h1>
      <p className="text-center text-gray-600 mb-6">{currentPost.subtitle}</p>
      
      <BlogRating rating={currentPost.rating} />

      <div className="relative">
        <BlogNavigation 
          onPrevious={handlePrevious}
          onNext={handleNext}
          hasPrevious={currentIndex > 0}
          hasNext={currentIndex < blogPosts.length - 1}
        />

        <div className="grid grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src={currentPost.image}
              alt={currentPost.title}
              className="w-full h-[400px] object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-serif text-orange-800 mb-6">{currentPost.title}</h2>
            
            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <span>By {currentPost.author}</span>
              </div>
              <span>|</span>
              <div>{currentPost.date}</div>
              <span>|</span>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                <span>{currentPost.comments} Comments</span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              {currentPost.preview}
            </p>

            <button className="px-6 py-2 border-2 border-orange-800 text-orange-800 rounded-full 
              hover:bg-orange-800 hover:text-white transition-colors font-medium">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}