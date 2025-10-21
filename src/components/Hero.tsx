import React from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Github, Calendar } from 'lucide-react';
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
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl text-justify hyphens-auto" lang="en">
                  {personalInfo.bio}
                </p>
                <div className="flex gap-4 justify-center sm:justify-start pt-2">
                  <a
                    href={personalInfo.contact.linkedin}
                    className="flex items-center gap-2 hover:opacity-70 transition-opacity group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                    <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">LinkedIn</span>
                  </a>
                  <a
                    href={personalInfo.contact.github}
                    className="flex items-center gap-2 hover:opacity-70 transition-opacity group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                    <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">GitHub</span>
                  </a>
                  <a
                    href="https://calendly.com/bahauddin-chishte"
                    className="flex items-center gap-2 hover:opacity-70 transition-opacity group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                    <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">Appointment</span>
                  </a>
                </div>
              </div>

              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 flex-shrink-0 relative group" style={{ padding: '0 16px' }}>
                {personalInfo.images.map((image, index) => {
                  const position = (index - currentImageIndex + personalInfo.images.length) % personalInfo.images.length;
                  const isVisible = position < 3;

                  let translateX = 0;
                  if (position === 1) translateX = -12;
                  if (position === 2) translateX = 12;

                  return (
                    <div
                      key={index}
                      className={`absolute inset-0 rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer ${
                        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                      style={{
                        transform: `translateX(${translateX}px) translateY(${position * 6}px) scale(${1 - position * 0.05}) rotate(${position === 1 ? -3 : position === 2 ? 3 : 0}deg)`,
                        zIndex: 10 - position,
                      }}
                      onClick={nextImage}
                    >
                      <div className="w-full h-full rounded-2xl overflow-hidden ring-2 ring-slate-500/20 bg-slate-700 shadow-xl">
                        <img
                          src={image}
                          alt={`${personalInfo.name} ${index + 1}`}
                          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  );
                })}

                <div className="absolute inset-0 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="p-1.5 bg-black/50 text-white rounded-full ml-2 hover:bg-black/70 transition-colors pointer-events-auto"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="p-1.5 bg-black/50 text-white rounded-full mr-2 hover:bg-black/70 transition-colors pointer-events-auto"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
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
              <p className="text-justify hyphens-auto" lang="en">I believe opportunity should never be limited by circumstance. Growing up, I saw how a lack of resources held people back—including my own family. But I also learned that with the right tools, anyone can change their future. That's what drives me—using technology, entrepreneurship, and education to break barriers and create opportunities. Whether it's building platforms, mentoring students, or launching new ideas, I'm always looking for ways to make an impact and help others move forward.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
