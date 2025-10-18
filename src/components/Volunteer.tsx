import React, { useState } from 'react';
import { volunteerExperiences } from '../data';
import { Calendar, Users, ArrowRight, X } from 'lucide-react';

interface VolunteerModalProps {
  experience: typeof volunteerExperiences[0];
  onClose: () => void;
}

function VolunteerModal({ experience, onClose }: VolunteerModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-neutral-950 rounded-2xl max-w-3xl w-full overflow-hidden border border-neutral-800"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative h-64 overflow-hidden">
          <img
            src={experience.image}
            alt={experience.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-neutral-900/50 rounded-lg hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{experience.title}</h3>
          <p className="text-emerald-400 text-sm font-medium mb-4">{experience.organization}</p>
          <p className="text-neutral-300 mb-6 leading-relaxed text-[15px]">{experience.description}</p>
          <div className="flex items-center gap-2 text-neutral-500 uppercase tracking-wide">
            <Calendar className="w-4 h-4" />
            <span className="text-xs">{experience.period}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Volunteer() {
  const [selectedExperience, setSelectedExperience] = useState<typeof volunteerExperiences[0] | null>(null);

  return (
    <section className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-12 border border-slate-700/50" id="volunteer">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
        Volunteer Work
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {volunteerExperiences.map((experience, index) => (
          <button
            key={index}
            onClick={() => setSelectedExperience(experience)}
            className="text-left group bg-neutral-950 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-emerald-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-white mb-1 leading-tight transition-colors">
                    {experience.title}
                  </h3>
                  <p className="text-emerald-400 text-[15px] font-medium mb-3">
                    {experience.organization}
                  </p>
                  <p className="text-neutral-400 text-[14px] line-clamp-2 mb-4 transition-colors leading-relaxed">
                    {experience.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-neutral-500 text-xs uppercase tracking-wide">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.period}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedExperience && (
        <VolunteerModal 
          experience={selectedExperience} 
          onClose={() => setSelectedExperience(null)} 
        />
      )}
    </section>
  );
}