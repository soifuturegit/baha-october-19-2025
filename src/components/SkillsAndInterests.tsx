import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { skills, interests } from '../data/skills';

export default function SkillsAndInterests() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden"
      id="skills-interests"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 sm:p-8 lg:p-12 flex items-start justify-between group text-left hover:bg-slate-800/30 transition-all duration-300"
      >
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-3">
            Skills & Interests
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Technical expertise and personal interests
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
        <div className="p-6 sm:p-8 lg:p-12 pt-0 space-y-8">
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
        </div>
      </div>
    </section>
  );
}
