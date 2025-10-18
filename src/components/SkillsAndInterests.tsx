import React from 'react';
import { skills, interests } from '../data/skills';

export default function SkillsAndInterests() {
  return (
    <section
      className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-12 border border-slate-700/50"
      id="skills-interests"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
        Skills & Interests
      </h2>

      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skills.map((skillCategory, index) => (
            <div key={index} className="bg-neutral-950 rounded-2xl border border-neutral-800 p-6">
              <h3 className="text-lg font-bold text-white mb-4">
                {skillCategory.category}
              </h3>
              <ul className="space-y-2.5">
                {skillCategory.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 text-neutral-400">
                    <div className="mt-2 w-1.5 h-1.5 bg-neutral-500 rounded-full flex-shrink-0" />
                    <span className="text-[14px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-neutral-950 rounded-2xl border border-neutral-800 p-6">
          <h3 className="text-lg font-bold text-white mb-4">
            Interests
          </h3>
          <p className="text-neutral-400 text-[14px] leading-relaxed">
            {interests.map((interest) => interest.title).join(', ')}.
          </p>
        </div>
      </div>
    </section>
  );
}
