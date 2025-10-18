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
      <div className="max-w-2xl mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 relative inline-block">
          Impact & Volunteering
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full opacity-50" />
        </h2>
        <p className="text-slate-400 text-lg mt-4">
          Creating positive change through technology and community engagement.
        </p>
      </div>

      <div className="space-y-4">
        {volunteerExperiences.map((experience, index) => (
          <div 
            key={index}
            className="bg-slate-900/50 rounded-lg border border-slate-800/50 hover:border-blue-500/30 transition-all duration-300"
          >
            {/* Header - Always Visible */}
            <button
              onClick={() => toggleExpand(index)}
             className="w-full px-6 py-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 text-left group/header"
            >
             <div className="flex items-start gap-5">
               <div className="w-14 h-14 rounded-xl bg-slate-800/50 flex items-center justify-center flex-shrink-0 border border-slate-700/50 group-hover/header:border-blue-500/30 transition-colors">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
               <div className="flex-1">
                 <h3 className="text-xl font-semibold text-white group-hover/header:text-blue-400 transition-colors mb-1">
                    {experience.title}
                  </h3>
                 <div className="flex items-center gap-3 mb-2">
                    <span className="text-blue-400">{experience.organization}</span>
                   <span className="px-2 py-0.5 rounded-md text-xs font-medium bg-slate-800/50 text-slate-500 border border-slate-700/30">
                      Volunteer
                    </span>
                  </div>
                 <div className="flex items-center gap-2 text-sm text-slate-400">
                   <Calendar className="w-3.5 h-3.5" />
                   <span>{experience.period}</span>
                 </div>
                </div>
              </div>
             <div className="flex items-center text-slate-400 sm:mt-1">
                {expandedIds.includes(index) ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
            </button>

            {/* Expanded Content */}
            {expandedIds.includes(index) && (
             <div className="px-6 py-6 border-t border-slate-800/50 bg-slate-900/30">
               <div className="pl-19">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left side - Description and Achievements */}
                    <div>
                     <p className="text-slate-300 leading-relaxed mb-8 text-[15px]">
                        {experience.description}
                      </p>

                     <div>
                        <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                          <Trophy className="w-4 h-4 text-blue-400" />
                          Impact Highlights
                        </h4>
                        <ul className="space-y-2">
                         <li className="flex items-start gap-3 text-slate-400 text-[15px] leading-relaxed">
                           <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                            Mentored 20+ students in programming fundamentals
                          </li>
                         <li className="flex items-start gap-3 text-slate-400 text-[15px] leading-relaxed">
                           <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                            Increased student engagement by 40%
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <img 
                        src={experience.image} 
                        alt={experience.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 to-transparent" />
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