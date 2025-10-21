import React from 'react';
import { Github, Linkedin, Calendar } from 'lucide-react';
import { personalInfo } from '../data/personal-info';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-800/50 backdrop-blur-sm rounded-xl border border-emerald-500/30 mt-8">
      <div className="p-8 lg:p-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Email</h3>
            <p className="text-slate-400 text-sm mb-4">
              Please replace (doooot) with .
            </p>
            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium"
            >
              {personalInfo.contact.email.replace('@', ' (doooot) ')}
            </a>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Socials</h3>
            <p className="text-slate-400 text-sm mb-4">
              Linkedin for fastest reply.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={personalInfo.contact.github}
                className="flex items-center gap-2 hover:opacity-70 transition-opacity group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">Github</span>
              </a>
              <a
                href={personalInfo.contact.linkedin}
                className="flex items-center gap-2 hover:opacity-70 transition-opacity group"
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
              className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">Make an Appointment</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-emerald-500/30">
          <p className="text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
