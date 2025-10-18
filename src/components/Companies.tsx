import React, { useRef, useEffect, useState } from 'react';
import { companies } from '../data/companies';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Companies() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number | null>(null);
  const scrollSpeed = 0.5;
  const itemWidth = 160 + 32;
  const originalContentWidth = companies.length * itemWidth;

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = itemWidth * 3;
      setIsPaused(true);

      if (direction === 'left') {
        scrollContainerRef.current.scrollLeft -= scrollAmount;
        if (scrollContainerRef.current.scrollLeft < 0) {
          scrollContainerRef.current.scrollLeft = originalContentWidth + scrollContainerRef.current.scrollLeft;
        }
      } else {
        scrollContainerRef.current.scrollLeft += scrollAmount;
        if (scrollContainerRef.current.scrollLeft >= originalContentWidth) {
          scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollLeft - originalContentWidth;
        }
      }

      setTimeout(() => setIsPaused(false), 2000);
    }
  };

  const scrollAnimation = () => {
    if (scrollContainerRef.current && !isPaused) {
      scrollContainerRef.current.scrollLeft += scrollSpeed;

      if (scrollContainerRef.current.scrollLeft >= originalContentWidth) {
        scrollContainerRef.current.scrollLeft = 0;
      }

      animationRef.current = requestAnimationFrame(scrollAnimation);
    } else {
      animationRef.current = requestAnimationFrame(scrollAnimation);
    }
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(scrollAnimation);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  return (
    <section
      className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-12 border border-slate-700/50"
      id="companies"
    >
      <div className="max-w-2xl mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 relative inline-block">
          Companies I've Worked With
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full opacity-50" />
        </h2>
        <p className="text-slate-400 text-lg mt-4">
          Organizations where I've contributed my skills and expertise.
        </p>
      </div>

      <div className="relative">
        <button
          onClick={() => handleScroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white text-gray-700 rounded-full shadow-lg hover:bg-gray-100 transition-colors hidden md:block"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div
          ref={scrollContainerRef}
          className="overflow-x-hidden py-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            scrollBehavior: 'auto'
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex space-x-8">
            {companies.concat(companies).map((company, index) => (
              <div
                key={`${company.id}-${index}`}
                className="flex-shrink-0 bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-xl"
                style={{ width: '160px', height: '96px' }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-full object-contain transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => handleScroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white text-gray-700 rounded-full shadow-lg hover:bg-gray-100 transition-colors hidden md:block"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
