import React from 'react';

const references = [
  {
    name: "Seeam Sahid Noor",
    title: "Senior Product Manager, IMB / Founder, Vocab Practice",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  },
  {
    name: "Bappy Golder",
    title: "Founder & COO, oLab",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
  },
  {
    name: "Nahid Tanvir Mustafa",
    title: "Founder, BabylondBD, Joana Paper Product Industry",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
  },
  {
    name: "Khalid Farhan",
    title: "Founder & CEO, Passive Journal",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
  },
  {
    name: "Numire Sattar Apar",
    title: "Founder & CEO, Apars Classroom, ACS Future School",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
  },
  {
    name: "Gillissen (Gigi) Green",
    title: "Academic & Cultural Engagement Specialist, UNH",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
  },
  {
    name: "Waqif Hossain",
    title: "Director of Business Development, TransPerfect",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop"
  },
  {
    name: "Mamoon Rashid",
    title: "Founder, GREC, Aemers / E-learning Developer, Commonwealth of Virginia",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
  }
];

export default function References() {
  return (
    <section className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-12 border border-slate-700/50" id="references">
      <div className="max-w-2xl mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 relative inline-block">
          References
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full opacity-50" />
        </h2>
        <p className="text-slate-400 text-lg mt-4">
          Professional references from industry leaders and collaborators.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {references.map((reference, index) => (
          <div key={index} className="bg-slate-900/50 rounded-lg p-6 border border-slate-800/50 hover:border-blue-500/30 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500/30">
                <img
                  src={reference.image}
                  alt={reference.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-slate-200 mb-1">
                  {reference.name}
                </h3>
                <div className="h-px bg-slate-700/50 mb-2"></div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {reference.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
