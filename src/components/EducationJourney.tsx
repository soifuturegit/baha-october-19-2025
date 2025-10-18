import React, { useState } from 'react';
import { GraduationCap, BookOpen, Rocket, School, ChevronDown, ChevronUp, Award, Star } from 'lucide-react';

const timeline = [
  {
    title: "Gap Years & Self-Learning",
    institution: "Entrepreneurial Projects & Work",
    period: "2022-2024",
    description: "Utilized this time to learn programming, build projects, and create social impact through technology initiatives. Completed various online courses in computer science and web development.",
    icon: BookOpen,
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    title: "High School Graduate",
    institution: "Government Tolaram College, Narayanganj",
    period: "Feb 2022",
    description: "Graduated from Science Group with the final GPA of 4.92/5.",
    icon: School,
    gradient: "from-blue-500 to-cyan-500"
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden" id="education">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 sm:p-8 lg:p-12 flex items-start justify-between group text-left hover:bg-slate-800/30 transition-all duration-300"
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl border border-emerald-500/30">
              <GraduationCap className="w-6 h-6 text-emerald-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Education Journey
            </h2>
          </div>
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
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-emerald-500/50 via-teal-500/50 to-transparent"></div>

            <div className="space-y-8">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="relative pl-20 group/item animate-fadeIn"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`absolute left-0 p-3 bg-gradient-to-br ${item.gradient} rounded-xl shadow-lg shadow-${item.gradient}/20 group-hover/item:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <div className="relative bg-slate-800/50 rounded-xl p-6 sm:p-8 border border-slate-700/50 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 group-hover/item:translate-x-2">
                      <div className="absolute top-4 right-4">
                        <Star className="w-5 h-5 text-emerald-400/30 group-hover/item:text-emerald-400 group-hover/item:rotate-12 transition-all duration-300" />
                      </div>

                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          {item.title}
                        </h3>
                        <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium rounded-full">
                          {item.period}
                        </span>
                      </div>

                      <p className="text-emerald-400 text-sm sm:text-base font-medium mb-4 flex items-center gap-2">
                        <School className="w-4 h-4" />
                        {item.institution}
                      </p>

                      <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-8 border-t border-slate-700/50">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30">
                <Award className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Courses & Certifications</h3>
            </div>

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
                          <div className="mt-2 w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0 group-hover/course:scale-150 transition-transform duration-200" />
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