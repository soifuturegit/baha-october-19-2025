import React from 'react';
import { Github, Linkedin, Calendar, Briefcase } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  return (
    <section className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-12 border border-emerald-500/30" id="contact">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
        Get in Touch
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Email</h3>
          <p className="text-slate-400 text-sm mb-4">
            Please replace (dot) with .
          </p>
          <a
            href={`mailto:${personalInfo.contact.email}`}
            className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium break-words"
          >
            {personalInfo.contact.email.replace('@', ' (dot) ')}
          </a>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Socials</h3>
          <p className="text-slate-400 text-sm mb-4">
            Linkedin for fastest reply.
          </p>
          <div className="flex flex-col gap-3">
            <a
              href={personalInfo.contact.github}
              className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 hover:bg-slate-900 border border-slate-700/50 hover:border-slate-600 rounded-lg transition-all group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">Github</span>
            </a>
            <a
              href={personalInfo.contact.linkedin}
              className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 hover:bg-slate-900 border border-slate-700/50 hover:border-slate-600 rounded-lg transition-all group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">LinkedIn</span>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Quick Call?</h3>
          <p className="text-slate-400 text-sm mb-4">
            Schedule a 20 min call.
          </p>
          <a
            href="https://calendly.com/bahauddin-chishte"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/50 hover:bg-slate-900 border border-slate-700/50 hover:border-slate-600 rounded-lg transition-all group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Calendar className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">Make an Appointment</span>
          </a>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Hire Me</h3>
          <p className="text-slate-400 text-sm mb-4">
            Available for freelance work.
          </p>
          <a
            href="https://www.upwork.com/freelancers/~010ac34abc2d2bd46c"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/50 hover:bg-slate-900 border border-slate-700/50 hover:border-slate-600 rounded-lg transition-all group"
          >
            <Briefcase className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">Upwork Profile</span>
          </a>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-emerald-500/30">
        <p className="text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </section>
  );
}