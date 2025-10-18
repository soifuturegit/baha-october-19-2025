import React, { useState } from 'react';
import { GraduationCap, BookOpen, Rocket, School, ChevronDown, ChevronUp } from 'lucide-react';

const timeline = [
  {
    title: "Gap Years & Self-Learning",
    institution: "Entrepreneurial Projects & Work",
    period: "2022-2024",
    description: "Utilized this time to learn programming, build projects, and create social impact through technology initiatives. Completed various online courses in computer science and web development.",
    icon: BookOpen
  },
  {
    title: "High School Graduate",
    institution: "Government Tolaram College, Narayanganj",
    period: "Feb 2022",
    description: "Graduated from Science Group with the final GPA of 4.92/5.",
    icon: School
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
    <section className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50" id="education">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 sm:p-8 lg:p-12 flex items-start justify-between group text-left"
      >
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Education
          </h2>
          {/* <p className="text-slate-400 text-lg mt-4">
            A unique path of self-directed learning and growth.
          </p> */}
        </div>
        <div className="p-2 -mr-2 rounded-lg group-hover:bg-slate-800/50 transition-colors">
          {isOpen ? (
            <ChevronUp className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
          ) : (
            <ChevronDown className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
          )}
        </div>
      </button>

      <div
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="p-6 sm:p-8 lg:p-12 pt-0 space-y-12">
          <div className="relative">
            <div className="absolute left-8 top-8 bottom-8 w-px bg-slate-700/50"></div>

            <div className="space-y-8">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="relative pl-16 animate-fadeIn"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute left-0 p-2 bg-slate-900 rounded-lg border border-slate-700/50">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>

                    <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-800/50 hover:border-blue-500/30 transition-all duration-300">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-white">
                          {item.title}
                        </h3>
                        <span className="text-blue-400 text-sm">
                          {item.period}
                        </span>
                      </div>

                      <p className="text-blue-400 text-sm mb-3">
                        {item.institution}
                      </p>

                      <p className="text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-8 border-t border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-8">Courses & Certifications</h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {Object.entries(coursesData).map(([category, courses], catIndex) => (
                <div key={catIndex} className="space-y-3">
                  <h4 className="text-lg font-bold text-white">{category}</h4>
                  <ul className="space-y-2">
                    {courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="flex items-start gap-3 text-slate-400">
                        <div className="mt-2 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0" />
                        <span className="text-sm leading-relaxed">
                          {course.name} - {course.provider} ({course.year})
                        </span>
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