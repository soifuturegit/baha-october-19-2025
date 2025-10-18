import React, { useState } from 'react';
import { Award, GraduationCap, Trophy } from 'lucide-react';
import { achievements } from '../data';

const categories = [
  { id: 'all', label: 'All', icon: Trophy },
  { id: 'certificates', label: 'Certificates', icon: GraduationCap },
  { id: 'awards', label: 'Awards', icon: Award },
  { id: 'achievements', label: 'Achievements', icon: Trophy },
  { id: 'Volunteering', label: 'Volunteering', icon: Trophy },
];

interface AchievementModalProps {
  achievement: typeof achievements[0];
  onClose: () => void;
}

function AchievementModal({ achievement, onClose }: AchievementModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div
        className="bg-neutral-950 rounded-2xl max-w-2xl w-full overflow-hidden border border-neutral-800"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative aspect-video overflow-hidden">
          <img
            src={achievement.image}
            alt={achievement.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 to-transparent" />
        </div>
        <div className="p-6">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">{achievement.title}</h3>
          <p className="text-emerald-400 mb-2 font-medium text-[15px]">{achievement.organization}</p>
          <p className="text-neutral-400 mb-4 text-[15px] leading-relaxed">{achievement.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-neutral-500 text-xs uppercase tracking-wide">{achievement.date}</span>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors font-medium text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Achievements() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedAchievement, setSelectedAchievement] = useState<typeof achievements[0] | null>(null);

  const filteredAchievements = achievements.filter(
    item => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <section className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-12 border border-slate-700/50" id="achievements">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
        Achievements
      </h2>
      
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-900/50 rounded-xl mb-8">
        {categories.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveCategory(id)}
            className={`
              flex items-center gap-2 px-4 sm:px-6 py-2 rounded-lg transition-all text-sm sm:text-base
              ${activeCategory === id 
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}
            `}
          >
            <Icon size={16} className="sm:w-5 sm:h-5" />
            <span className="font-medium">{label}</span>
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAchievements.map((achievement, index) => (
          <button
            key={index}
            onClick={() => setSelectedAchievement(achievement)}
            className="text-left bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all duration-300 group"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={achievement.image}
                alt={achievement.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent" />
            </div>
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white rounded-lg transition-colors">
                  <Award className="w-5 h-5 text-emerald-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-white mb-2 transition-colors line-clamp-1 leading-tight">
                    {achievement.title}
                  </h3>
                  <p className="text-[13px] text-neutral-400 line-clamp-2 mb-2 leading-relaxed">
                    {achievement.description}
                  </p>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-emerald-400 text-[11px] font-medium uppercase tracking-wide">View Details</span>
                    <span className="text-neutral-500 text-[11px] uppercase tracking-wide">{achievement.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedAchievement && (
        <AchievementModal 
          achievement={selectedAchievement} 
          onClose={() => setSelectedAchievement(null)} 
        />
      )}
    </section>
  );
}