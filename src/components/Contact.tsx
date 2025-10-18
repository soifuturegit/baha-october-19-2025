import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data';

const references = [
  {
    name: "Seeam Sahid Noor",
    title: "Senior Product Manager, IMB / Founder, Vocab Practice"
  },
  {
    name: "Bappy Golder",
    title: "Founder & COO, oLab"
  },
  {
    name: "Nahid Tanvir Mustafa",
    title: "Founder, BabylondBD, Joana Paper Product Industry"
  },
  {
    name: "Khalid Farhan",
    title: "Founder & CEO, Passive Journal"
  },
  {
    name: "Numire Sattar Apar",
    title: "Founder & CEO, Apars Classroom, ACS Future School"
  },
  {
    name: "Gillissen (Gigi) Green",
    title: "Academic & Cultural Engagement Specialist, UNH"
  },
  {
    name: "Waqif Hossain",
    title: "Director of Business Development, TransPerfect"
  },
  {
    name: "Mamoon Rashid",
    title: "Founder, GREC, Aemers / E-learning Developer, Commonwealth of Virginia"
  }
];

export default function Contact() {
  return (
    <section className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-12 border border-slate-700/50" id="contact">
      <div className="max-w-2xl mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 relative inline-block">
          Get in Touch
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full opacity-50" />
        </h2>
        <p className="text-slate-400 text-lg mt-4">
          I'm always open to new opportunities and interesting projects.
        </p>
      </div>

      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-800/50">
            <p className="text-lg text-slate-400 mb-8">
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
                <span>{personalInfo.contact.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.contact.phone}`}
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
              >
                <Phone size={20} />
                <span>{personalInfo.contact.phone}</span>
              </a>
            </div>
          </div>
          <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-800/50 flex flex-col justify-center">
            <div className="flex gap-6 justify-center">
              <a
                href={personalInfo.contact.github}
                className="p-4 bg-slate-800/50 rounded-full text-slate-400 hover:text-white transition-colors border border-slate-700/50"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href={personalInfo.contact.linkedin}
                className="p-4 bg-slate-800/50 rounded-full text-slate-400 hover:text-white transition-colors border border-slate-700/50"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-700/50">
          <h3 className="text-2xl font-bold text-white mb-6">References</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {references.map((reference, index) => (
              <div key={index} className="flex items-start gap-3 text-slate-400">
                <div className="mt-2 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0" />
                <div className="text-sm leading-relaxed">
                  <span className="font-semibold text-white">{reference.name}</span> – {reference.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}