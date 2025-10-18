import React from 'react';
import * as Icons from 'lucide-react';
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

      <div className="space-y-12">
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Icons.Sparkles className="w-6 h-6 text-blue-400" />
            </div>
            Professional Skills
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {skills.map((skillCategory, index) => {
              const IconComponent = Icons[skillCategory.icon as keyof typeof Icons] as React.ElementType;
              return (
                <div
                  key={index}
                  className="bg-slate-900/50 rounded-xl p-6 border border-slate-800/50 hover:border-blue-500/50 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                      <IconComponent className="w-5 h-5 text-blue-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">
                      {skillCategory.category}
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {skillCategory.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-slate-300">
                        <div className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Icons.Heart className="w-6 h-6 text-green-400" />
            </div>
            Personal Interests
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {interests.map((interest, index) => {
              const IconComponent = Icons[interest.icon as keyof typeof Icons] as React.ElementType;
              return (
                <div
                  key={index}
                  className="bg-slate-900/50 rounded-lg p-4 border border-slate-800/50 hover:border-green-500/50 transition-all group text-center"
                >
                  <div className="mb-2 p-2 bg-green-500/10 rounded-lg w-fit mx-auto group-hover:bg-green-500/20 transition-colors">
                    <IconComponent className="w-5 h-5 text-green-400" />
                  </div>
                  <h4 className="text-sm font-medium text-white leading-tight">
                    {interest.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
