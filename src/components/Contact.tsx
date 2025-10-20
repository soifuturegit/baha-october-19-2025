import React from 'react';
import { Mail, Github, Linkedin, Briefcase } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  return (
    <section className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-12 border border-emerald-500/30" id="contact">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
        Get in Touch
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-800">
          <p className="text-[15px] text-neutral-400 mb-8 leading-relaxed">
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="space-y-5">
            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="flex items-center gap-4 text-neutral-400 hover:text-emerald-400 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-emerald-500" />
              </div>
              <span className="text-[15px] font-medium">{personalInfo.contact.email}</span>
            </a>
            <a
              href="https://www.upwork.com/freelancers/~010ac34abc2d2bd46c"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-neutral-400 hover:text-emerald-400 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-5 h-5 text-emerald-500" />
              </div>
              <span className="text-[15px] font-medium">Hire me on Upwork</span>
            </a>
          </div>
        </div>
        <div className="bg-neutral-950 rounded-2xl p-8 border border-neutral-800 flex flex-col justify-center">
          <div className="flex gap-6 justify-center">
            <a
              href={personalInfo.contact.github}
              className="w-14 h-14 bg-white rounded-xl flex items-center justify-center hover:scale-105 transition-transform"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-neutral-900" />
            </a>
            <a
              href={personalInfo.contact.linkedin}
              className="w-14 h-14 bg-white rounded-xl flex items-center justify-center hover:scale-105 transition-transform"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-neutral-900" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}