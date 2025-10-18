import React, { useRef, useEffect } from 'react';
import { blogPosts } from '../data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

interface BlogFilterProps {
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
}

export default function BlogFilter({ selectedTags, onTagToggle }: BlogFilterProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <div className="sticky top-16 z-30 bg-neutral-950/95 backdrop-blur-sm py-4 border-b border-neutral-800">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 flex items-center">
        {/* Left Shadow Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-neutral-950/95 to-transparent z-10 pointer-events-none" />
        
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 z-20 p-2 bg-white rounded-xl hover:scale-105 transition-transform"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 h-4 text-neutral-900" />
        </button>

        {/* Tags Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth mx-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <button
            onClick={() => onTagToggle('all')}
            className={`
              flex-shrink-0 px-4 py-2 rounded-xl text-[15px] font-medium transition-all whitespace-nowrap
              ${selectedTags.length === 0
                ? 'bg-emerald-500 text-white'
                : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'}
            `}
          >
            all posts
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => onTagToggle(tag)}
              className={`
                flex-shrink-0 px-4 py-2 rounded-xl text-[15px] font-medium transition-all whitespace-nowrap
                ${selectedTags.includes(tag)
                  ? 'bg-emerald-500 text-white'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'}
              `}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Right Shadow Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-neutral-950/95 to-transparent z-10 pointer-events-none" />

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-2 z-20 p-2 bg-white rounded-xl hover:scale-105 transition-transform"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 h-4 text-neutral-900" />
        </button>
      </div>
    </div>
  );
}