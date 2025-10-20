import React, { useState } from 'react';
import { Users, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { volunteerExperiences } from '../data';

export default function Impact() {
  const [expandedIds, setExpandedIds] = useState<number[]>([]);
  const [isOpen, setIsOpen] = useState(true);

  const toggleExpand = (index: number) => {
    setExpandedIds(prev => {
      if (prev.includes(index)) {
        return prev.filter(id => id !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <section className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm rounded-2xl border border-emerald-500/30 overflow-hidden" id="impact">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 sm:p-8 lg:p-12 flex items-start justify-between group text-left hover:bg-slate-800/30 transition-all duration-300"
      >
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-3">
            Impact & Volunteering
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Making a difference through community service and volunteering
          </p>
        </div>
        <div className="p-2.5 rounded-xl group-hover:bg-slate-700/50 transition-all duration-300 ml-4">
          {isOpen ? (
            <ChevronUp className="w-6 h-6 text-slate-400 group-hover:text-emerald-400 transition-colors" />
          ) : (
            <ChevronDown className="w-6 h-6 text-slate-400 group-hover:text-emerald-400 transition-colors" />
          )}
        </div>
      </button>

      <div
        className={`
          overflow-hidden transition-all duration-500 ease-in-out
          ${isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="p-6 sm:p-8 lg:p-12 pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {volunteerExperiences.map((experience, index) => (
              <div
                key={index}
                className="bg-neutral-950 rounded-2xl border border-neutral-800 hover:border-emerald-500/30 transition-all duration-300 overflow-hidden group/card"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center">
                      <Users className="w-6 h-6 text-emerald-500" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                    {experience.title}
                  </h3>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-emerald-400 font-medium text-sm">{experience.organization}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-neutral-500 uppercase tracking-wide mb-4">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{experience.period}</span>
                  </div>

                  <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    {experience.excerpt}
                  </p>

                  <button
                    onClick={() => toggleExpand(index)}
                    className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors"
                  >
                    {expandedIds.includes(index) ? (
                      <>
                        <span>Show less</span>
                        <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        <span>Read more</span>
                        <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {expandedIds.includes(index) && (
                    <div className="mt-4 pt-4 border-t border-neutral-800">
                      <p className="text-neutral-300 text-sm leading-relaxed">
                        {experience.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
