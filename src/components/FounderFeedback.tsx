import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';
import { founderFeedback } from '../data/founder-feedback';

export default function FounderFeedback() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section
      className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm rounded-2xl border border-emerald-500/30 overflow-hidden"
      id="founder-feedback"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 sm:p-8 lg:p-12 flex items-start justify-between group text-left hover:bg-slate-800/30 transition-all duration-300"
      >
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-3">
            What Founders Say About Me
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Real feedback from founders and business leaders I've worked with
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {founderFeedback.map((item) => (
          <div
            key={item.id}
            className="bg-gradient-to-br from-green-900/40 to-green-950/40 backdrop-blur-sm rounded-2xl p-8 border border-green-800/30 hover:border-green-700/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-900/20 flex flex-col"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                Completed successfully!
              </h3>

              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-green-400 text-green-400"
                  />
                ))}
              </div>

              <p className="text-white text-base leading-relaxed">
                {item.feedback}
              </p>
            </div>

            <div className="mt-auto pt-6 border-t border-green-800/30">
              <div className="flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-green-700/50"
                />
                <div>
                  <h4 className="text-white font-semibold text-sm">
                    {item.name}
                  </h4>
                  <p className="text-green-300 text-sm">
                    {item.role} - {item.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
      </div>
    </section>
  );
}
