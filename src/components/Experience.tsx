import React, { useState } from 'react';
import { experiences } from '../data';
import { Plus } from 'lucide-react';

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

  return (
    <section className="section-padding bg-neutral-900" id="experience">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12">
          Work Experience
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-neutral-950 rounded-2xl border border-neutral-800 overflow-hidden hover:border-neutral-700 transition-all duration-300"
            >
              {/* Header */}
              <div className="p-6 pb-5">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <img
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white mb-1 leading-tight">
                      {experience.company}
                    </h3>
                    <p className="text-emerald-400 text-[15px] font-medium mb-2">
                      {experience.title}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500 uppercase tracking-wide">
                      <span>{experience.period}</span>
                      <span className="w-1 h-1 rounded-full bg-neutral-500" />
                      <span>{experience.location || 'Remote'}</span>
                    </div>
                  </div>
                </div>

                {/* Expand Button */}
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors duration-200 group"
                >
                  <span className="text-neutral-300 text-sm font-medium">
                    My Responsibilities {expandedIds.includes(index) ? '(Collapse)' : '(Expand)'}
                  </span>
                  <Plus
                    className={`w-5 h-5 text-neutral-400 transition-transform duration-200 ${
                      expandedIds.includes(index) ? 'rotate-45' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Expanded Content */}
              {expandedIds.includes(index) && (
                <div className="px-6 pb-6 pt-0 border-t border-neutral-800">
                  <div className="pt-5 space-y-5">
                    {/* Description */}
                    <div>
                      <p className="text-neutral-300 text-[15px] leading-relaxed mb-4">
                        {experience.description}
                      </p>
                    </div>

                    {/* Key Achievements */}
                    <div>
                      <h4 className="text-white font-semibold mb-3 text-sm">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2.5">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-neutral-400 text-[14px] leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="text-white font-semibold mb-3 text-sm">
                        Skills & Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-neutral-900 text-neutral-300 rounded-lg text-xs border border-neutral-800 hover:border-emerald-500/30 hover:text-emerald-400 transition-colors"
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
      </div>
    </section>
  );
}
