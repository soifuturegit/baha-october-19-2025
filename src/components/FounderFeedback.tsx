import React from 'react';
import { Star } from 'lucide-react';
import { founderFeedback } from '../data/founder-feedback';

export default function FounderFeedback() {
  return (
    <section
      className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-12 border border-slate-700/50"
      id="founder-feedback"
    >
      <div className="max-w-2xl mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 relative inline-block">
          What Founders Say About Me
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full opacity-50" />
        </h2>
        <p className="text-slate-400 text-lg mt-4">
          Real feedback from founders and business leaders I've worked with.
        </p>
      </div>

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
    </section>
  );
}
