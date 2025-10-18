import React, { useState } from 'react';
import { experiences } from '../data';
import { 
  Calendar, 
  MapPin, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Clock,
  Trophy
} from 'lucide-react';

export default function Experience() {
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

  const getTypeColor = (type: string) => {
    return 'bg-slate-800/50 text-slate-500 border border-slate-700/30';
  };

  return (
    <section className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-12 border border-slate-700/50" id="experience">
      <div className="max-w-2xl mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 relative inline-block">
          Experience
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full opacity-50" />
        </h2>
        <p className="text-slate-400 text-lg mt-4">
          My professional journey in technology and entrepreneurship.
        </p>
      </div>

      <div className="space-y-4">
        {experiences.map((experience, index) => (
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
                <div className="w-14 h-14 rounded-xl bg-slate-800/50 flex items-center justify-center flex-shrink-0 overflow-hidden border border-slate-700/50 group-hover/header:border-blue-500/30 transition-colors">
                  <img 
                    src={experience.logo} 
                    alt={`${experience.company} logo`}
                    className="w-full h-full object-cover transition-transform group-hover/header:scale-105"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white group-hover/header:text-blue-400 transition-colors mb-1">
                    {experience.title}
                  </h3>
                  <div className="flex items-center gap-3 mb-2">
                    {experience.url ? (
                      <a 
                        href={experience.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {experience.company}
                      </a>
                    ) : (
                      <span className="text-blue-400 font-medium">{experience.company}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{experience.period}</span>
                    </div>
                    <span className="w-1 h-1 rounded-full bg-slate-600" />
                    <span className={`px-2 py-0.5 rounded-md text-xs font-medium ${getTypeColor(experience.type)}`}>
                      {experience.type}
                    </span>
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
                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed mb-8 text-[15px]">
                    {experience.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="mb-8">
                    <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-blue-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-400 text-[15px] leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="text-white font-medium mb-3 text-sm">Skills & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1.5 bg-slate-800/50 text-slate-300 rounded-md text-sm border border-slate-700/30 hover:border-blue-500/30 hover:text-slate-200 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
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