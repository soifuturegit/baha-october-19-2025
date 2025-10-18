import React, { useRef, useEffect, useState } from 'react';
import { companies } from '../data/companies';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Companies() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number | null>(null);
  const scrollAmount = 1; // Pixels to scroll per frame
  
  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollAnimation = () => {
    if (scrollContainerRef.current && !isPaused) {
      scrollContainerRef.current.scrollLeft += scrollAmount;
      
      // If we've scrolled to the end, reset to start
      if (scrollContainerRef.current.scrollLeft >= 
          scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth) {
        scrollContainerRef.current.scrollLeft = 0;
      }
      
      animationRef.current = requestAnimationFrame(scrollAnimation);
    } else if (isPaused && animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  // Set up autoscroll
  useEffect(() => {
    if (!isPaused) {
      animationRef.current = requestAnimationFrame(scrollAnimation);
    }
    
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
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          Companies I've Worked With
        </h2>
        <p className="text-slate-400 text-lg mt-4">
          Organizations where I've contributed my skills and expertise.
        </p>
      </div>

      <div className="relative">
        {/* Scroll Left Button */}
        <button 
          onClick={() => handleScroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-slate-900/70 text-white rounded-full shadow-lg hover:bg-slate-800 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        {/* Companies Container */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto py-4 pb-6 hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="flex gap-6 px-12">
            {companies.map((company) => (
              <div key={company.id} className="group bg-slate-900/50 rounded-xl border border-slate-800/50 hover:border-blue-500/30 transition-all duration-300 w-48">
                <div className="p-6">
                  {/* Logo */}
                  <div className="flex justify-center mb-4">
                    <div className="w-24 h-24 rounded-2xl bg-white/10 flex items-center justify-center p-4 group-hover:bg-white/15 transition-all duration-300">
                      <img 
                        src={company.logo} 
                        alt={`${company.name} logo`}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="text-center">
                    <h3 className="text-white font-semibold mb-2">{company.name}</h3>
                    <p className="text-slate-400 text-sm mb-4">{company.description}</p>
                    {company.website && (
                      <div className="flex justify-center">
                        <a 
                          href={company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm transition-colors"
                        >
                          Visit Website
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Scroll Right Button */}
        <button 
          onClick={() => handleScroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-slate-900/70 text-white rounded-full shadow-lg hover:bg-slate-800 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}