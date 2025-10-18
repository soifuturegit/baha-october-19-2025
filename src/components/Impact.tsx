import React, { useState } from 'react';
import { Users, Calendar, ExternalLink, ChevronDown, ChevronUp, Trophy } from 'lucide-react';
import { volunteerExperiences } from '../data';

export default function Impact() {
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

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
    <section className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-12 border border-slate-700/50" id="impact">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
        Impact & Volunteering
      </h2>

      <div className="space-y-4">
        {volunteerExperiences.map((experience, index) => (
          <div
            key={index}
            className="bg-neutral-950 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-all duration-300"
          >
            {/* Header - Always Visible */}
            <button
              onClick={() => toggleExpand(index)}
             className="w-full px-6 py-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 text-left group/header"
            >
             <div className="flex items-start gap-5">
               <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center flex-shrink-0 transition-colors">
                  <Users className="w-6 h-6 text-emerald-500" />
                </div>
               <div className="flex-1">
                 <h3 className="text-lg font-bold text-white transition-colors mb-1 leading-tight">
                    {experience.title}
                  </h3>
                 <div className="flex items-center gap-3 mb-2">
                    <span className="text-emerald-400 font-medium text-[15px]">{experience.organization}</span>
                   <span className="px-2 py-0.5 rounded-md text-xs font-medium bg-neutral-900 text-neutral-500 border border-neutral-800 uppercase tracking-wide">
                      Volunteer
                    </span>
                  </div>
                 <div className="flex items-center gap-2 text-xs text-neutral-500 uppercase tracking-wide">
                   <Calendar className="w-3.5 h-3.5" />
                   <span>{experience.period}</span>
                 </div>
                </div>
              </div>
             <div className="flex items-center text-neutral-400 sm:mt-1">
                {expandedIds.includes(index) ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
            </button>

            {/* Expanded Content */}
            {expandedIds.includes(index) && (
             <div className="px-6 py-6 border-t border-neutral-800">
               <div className="pl-19">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left side - Description and Achievements */}
                    <div>
                     <p className="text-neutral-300 leading-relaxed mb-8 text-[15px]">
                        {experience.description}
                      </p>

                     <div>
                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2 text-sm">
                          <Trophy className="w-4 h-4 text-emerald-400" />
                          Impact Highlights
                        </h4>
                        <ul className="space-y-2.5">
                         <li className="flex items-start gap-3 text-neutral-400 text-[14px] leading-relaxed">
                           <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 mt-2 flex-shrink-0" />
                            Mentored 20+ students in programming fundamentals
                          </li>
                         <li className="flex items-start gap-3 text-neutral-400 text-[14px] leading-relaxed">
                           <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 mt-2 flex-shrink-0" />
                            Increased student engagement by 40%
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="relative h-64 rounded-xl overflow-hidden border border-neutral-800">
                      <img
                        src={experience.image}
                        alt={experience.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}