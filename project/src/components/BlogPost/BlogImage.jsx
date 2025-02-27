import React from 'react';

export function BlogImage({ src, alt, caption }) {
  return (
    <figure className="my-8">
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img
          src={src}
          alt={alt}
          className="w-full h-[400px] object-cover"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-gray-600 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}