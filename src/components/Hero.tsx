import React from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { personalInfo } from '../data/personal-info';
import { useImageCarousel } from '../hooks/useImageCarousel';

export default function Hero() {
  const { currentImageIndex, nextImage, prevImage } = useImageCarousel(personalInfo.images);

  return (
    <section id="hero">
      <div className="w-full">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-emerald-500/30">
          <div className="p-6 sm:p-8 lg:p-12">
            <div className="flex flex-col-reverse sm:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
              <div className="flex-1 space-y-4 sm:space-y-6">
                <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-center sm:text-left">
                  Hey, I'm {personalInfo.name}
                </h1>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl text-left hyphens-auto" lang="en">
                  {personalInfo.bio}
                </p>
                <div className="flex gap-6 justify-center sm:justify-start pt-2">
                  <a
                    href={personalInfo.contact.linkedin}
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <a
                    href={personalInfo.contact.X}
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>X</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 flex-shrink-0 relative group">
                <div className="w-full h-full rounded-2xl overflow-hidden relative ring-2 ring-slate-500/20">
                  <img
                    src={personalInfo.images[currentImageIndex]}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-center cursor-pointer transition-transform duration-300 group-hover:scale-105"
                    onClick={nextImage}
                  />

                  <div className="absolute inset-0 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={(e) => { e.stopPropagation(); prevImage(); }}
                      className="p-1.5 bg-black/50 text-white rounded-full ml-2 hover:bg-black/70 transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); nextImage(); }}
                      className="p-1.5 bg-black/50 text-white rounded-full mr-2 hover:bg-black/70 transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <img
                      src={personalInfo.images[(currentImageIndex + 1) % personalInfo.images.length]}
                      alt="Next"
                      className="absolute right-0 top-0 w-1/4 h-1/4 object-cover rounded-lg transform translate-x-1/2 -translate-y-1/2 border-2 border-white/20"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-emerald-500/30 mt-8">
          <div className="p-6 sm:p-8 lg:p-12">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-lg sm:text-xl font-semibold text-white">A little more about me</span>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-400 leading-relaxed">
              <p>I believe opportunity should never be limited by circumstance. Growing up, I saw how a lack of resources held people back—including my own family. But I also learned that with the right tools, anyone can change their future. That's what drives me—using technology, entrepreneurship, and education to break barriers and create opportunities. Whether it's building platforms, mentoring students, or launching new ideas, I'm always looking for ways to make an impact and help others move forward.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
