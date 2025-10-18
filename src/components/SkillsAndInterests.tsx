import React from 'react';
import { skills, interests } from '../data/skills';

export default function SkillsAndInterests() {
  return (
    <section
      className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-12 border border-slate-700/50"
      id="skills-interests"
    >
      <div className="max-w-2xl mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 relative inline-block">
          Skills & Interests
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full opacity-50" />
        </h2>
        <p className="text-slate-400 text-lg mt-4">
          My technical expertise and personal passions that drive innovation.
        </p>
      </div>

      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skills.map((skillCategory, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-xl font-bold text-white">
                {skillCategory.category}
              </h3>
              <ul className="space-y-2">
                {skillCategory.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 text-slate-400">
                    <div className="mt-2 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-700/50">
          <h3 className="text-xl font-bold text-white mb-3">
            Interests
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            {interests.map((interest) => interest.title).join(', ')}.
          </p>
        </div>
      </div>
    </section>
  );
}
