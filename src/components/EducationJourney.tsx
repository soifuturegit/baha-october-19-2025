import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const timeline = [
  {
    title: "Independent Study",
    institution: "Coursera, EDx, LinkedIn & YT",
    period: "Mar 2022 – Present",
    description: " Utilized this time to learn programming, build projects, and create social impact through technology initiatives. Completed various online courses in computer science and web development, AI, Entrepreneurship, Digital Business",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    title: "Higher Secondary School Certificate (HSC/Grade 12)",
    institution: "Govt. Tolaram College | Chashara, Narayanganj",
    period: "Jul 2019 – Feb 2022",
    description: "Group: Science | GPA: 4.92 / 5.00",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Secondaey School Certificate (SSC/Grade 10)",
    institution: "Moshang High School | Moshang, Wazirpur, Barishal",
    period: "Jan 2014 – Mar 2019",
    description: "Group: Science | GPA: 4.83 / 5.00",
    gradient: "from-purple-500 to-pink-500"
  }
];

interface Course {
  name: string;
  provider: string;
  year: string;
}

const coursesData = {
  "Technical Development": [
    { name: "Full-stack Web Development", provider: "Scrimba", year: "2023" },
    { name: "CS50: Introduction to Computer Science", provider: "EdX x HarvardX", year: "2022" },
    { name: "AI Agent Development with n8n", provider: "Skool", year: "2024" },
    { name: "Prompt Engineering Foundation", provider: "Coursera x Vanderbilt University", year: "2023" },
    { name: "AI For Everyone", provider: "Coursera", year: "2023" }
  ],
  "Business & Marketing": [
    { name: "Digital Marketing Strategy", provider: "HubSpot Academy", year: "2022" },
    { name: "Facebook Ads, SEO, and Google Ads", provider: "Passive Journal", year: "2022" },
    { name: "Product Management", provider: "LinkedIn Learning", year: "2024" },
    { name: "Neuromarketing for Sales", provider: "LinkedIn Learning", year: "2024" },
    { name: "Project Management Foundation", provider: "Coursera", year: "2022" }
  ],
  "Professional Skills": [
    { name: "Leadership 101", provider: "LinkedIn Learning", year: "2023" },
    { name: "Critical Thinking", provider: "LinkedIn Learning", year: "2023" },
    { name: "Emotional Intelligence", provider: "LinkedIn Learning", year: "2023" },
    { name: "Communication Foundations", provider: "LinkedIn Learning", year: "2023" },
    { name: "Effective Listening", provider: "LinkedIn Learning", year: "2024" },
    { name: "Customer Service: Managing Customer Expectations", provider: "LinkedIn Learning", year: "2023" },
    { name: "Customer Service: Problem-Solving and Troubleshooting", provider: "LinkedIn Learning", year: "2023" },
    { name: "Virtual Accountability", provider: "LinkedIn Learning", year: "2023" },
    { name: "First 7 days in a New Job", provider: "LinkedIn Learning", year: "2023" },
    { name: "Master G Suite: Docs, Sheets, Slides", provider: "Learnit Training", year: "2022" }
  ]
};

export default function EducationJourney() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden" id="education">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 sm:p-8 lg:p-12 flex items-start justify-between group text-left hover:bg-slate-800/30 transition-all duration-300"
      >
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-3">
            Education & Certification
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            A unique path of self-directed learning, formal education, and continuous growth
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
        <div className="p-6 sm:p-8 lg:p-12 pt-0 space-y-12">
          <div className="relative">

            <div className="space-y-6">
              {timeline.map((item, index) => {
                return (
                  <div key={index} className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5">
                    <div className="flex flex-wrap items-baseline gap-2 mb-2">
                      <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                      <span className="text-emerald-400 text-sm">({item.period})</span>
                    </div>
                    <p className="text-sm text-slate-400 mb-2">{item.institution}</p>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-8 border-t border-slate-700/50">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">Courses & Certifications</h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {Object.entries(coursesData).map(([category, courses], catIndex) => (
                <div
                  key={catIndex}
                  className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5"
                >
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-emerald-400 to-teal-400 rounded-full"></div>
                    {category}
                  </h4>
                  <ul className="space-y-3">
                    {courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="group/course">
                        <div className="flex items-start gap-3 text-slate-400 hover:text-slate-200 transition-colors duration-200">
                          <div className="mt-2 w-1.5 h-1.5 bg-slate-500 rounded-full flex-shrink-0 group-hover/course:scale-150 transition-transform duration-200" />
                          <div className="flex-1">
                            <span className="text-sm leading-relaxed block">
                              <span className="font-medium text-slate-300">{course.name}</span>
                              <span className="text-slate-500"> · </span>
                              <span className="text-slate-500">{course.provider}</span>
                              <span className="text-emerald-400/70 ml-2 text-xs">({course.year})</span>
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}