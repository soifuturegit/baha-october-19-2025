import React, { useState, useMemo, useRef } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

const projects = [
    {
    "title": "Bangladesh To Abroad",
    "description": "Helping Banglai students explore global opportunities including education, job and competitions through curated resources, details guide, application tips, and peer support. 🟢 WIP: ntegrating AI tools to personalize opportunity matching and developing a forum to foster connection.",
    "tech": ["Astro", "React", "TypeScript", "TailwindCSS", "MDX", "Fuse Js", "Supabase"],
    "live": "https://bangladesh2abroad.com",
    "image": "https://live.staticflickr.com/65535/54463361644_f342d08d48_b.jpg",
    "category": "initiative",
    "showInAll": true
  },
  {
    "title": " Digital SAT Desmos Guide",
    "description": "A free interactive learning tool that offer step-by-step tutorials, tailored strategies, and strategies for using the Desmos calculator for Digital SAT Math score Improvement.",
    "tech": ["Vite", "TypeScript", "TailwindCSS", "Supabase"],
    "live": "https://onnorokomschool.org",
    "image": "https://live.staticflickr.com/65535/54463525580_d7d441ff41_b.jpg",
    "category": "initiative",
    "showInAll": true
  },
  {
    "title": "OnnoRokom School",
    "description": "A free online learning platform providing academic and skill development resources for underprivileged students, serving 10K+ visitors daily.",
    "tech": ["Next.js", "React", "TypeScript", "TailwindCSS", "Supabase"],
    "live": "https://onnorokomschool.org",
    "image": "https://live.staticflickr.com/65535/54463525595_17f861f1f1_b.jpg",
    "category": "initiative",
    "showInAll": true
  },
  {
    "title": "Earn4Edu",
    "description": "An initiative helping low-income students gain digital skills, earn online, and build careers with guided mentorship and real-world job placements.",
    "tech": ["React", "Next.js", "TypeScript", "Node.js"],
    "live": "https://earn4edu.org",
    "image": "https://live.staticflickr.com/65535/54300859257_af9f01025c_k.jpg",
    "category": "initiative",
    "showInAll": true
  },
  {
    "title": "Bazardor",
    "description": "Bangladesh's essential item price tracker, ensuring transparency and fairness in the market by comparing real-time prices.",
    "tech": ["Next.js", "TypeScript", "Supabase", "TailwindCSS"],
    "live": "https://ajker-bazardor.info",
    "image": "https://live.staticflickr.com/65535/54301984598_2645d9dc9a_k.jpg",
    "category": "initiative",
    "showInAll": true
  },
  {
    "title": "oLab Agency Website",
    "description": "The official site for oLab, an Australian software automation and digital marketing agency, designed and developed from scratch.",
    "tech": ["Astro", "React", "TypeScript", "TailwindCSS"],
    "live": "https://olab.com.au",
    "image": "https://live.staticflickr.com/65535/54301972399_fbe8390645_k.jpg",
    "category": "work",
    "showInAll": false
  },
  {
    "title": "Dev Sonket",
    "description": "Bangla's first programming cheat sheet platform, offering resources on AI, Python, and Prompt Engineering, with an active GitHub community.",
    "tech": ["Next.js", "TypeScript", "Markdown", "TailwindCSS"],
    "live": "https://devsonket.com",
    "image": "https://live.staticflickr.com/65535/54301984603_c9be18679a_k.jpg",
    "category": "initiative",
    "showInAll": true
  }

];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'initiative', label: 'Personal Initiatives' },
  { id: 'work', label: 'Work Portfolio' },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(true);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') {
      return projects.filter(project => project.showInAll);
    } else {
      return projects.filter(project => project.category === selectedCategory);
    }
  }, [selectedCategory]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm rounded-2xl border border-emerald-500/30 overflow-hidden" id="projects">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 sm:p-8 lg:p-12 flex items-start justify-between group text-left hover:bg-slate-800/30 transition-all duration-300"
      >
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-3">
            Projects and Initiative
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Building impactful solutions that make a difference
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

      {/* Category Filter - Mobile Friendly Horizontal Scroll */}
      <div className="relative mb-8">
        {/* Left Shadow Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-slate-800/50 to-transparent z-10 pointer-events-none" />

        {/* Left Scroll Button - Hidden on mobile, show on larger screens */}
        <button
          onClick={() => handleScroll('left')}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-1.5 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors hidden sm:block"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Categories Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide px-6 sm:px-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                flex-shrink-0 px-4 py-2 rounded-lg transition-all text-sm font-medium whitespace-nowrap
                ${selectedCategory === category.id
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                  : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50'}
              `}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Right Shadow Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-slate-800/50 to-transparent z-10 pointer-events-none" />

        {/* Right Scroll Button - Hidden on mobile, show on larger screens */}
        <button
          onClick={() => handleScroll('right')}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-1.5 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors hidden sm:block"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-neutral-950 rounded-2xl border border-neutral-800 overflow-hidden hover:border-neutral-700 transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/25 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className={`
                  px-2 py-1 text-xs font-medium rounded-full uppercase tracking-wide
                  ${project.category === 'initiative'
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : 'bg-blue-500/20 text-blue-400'}
                `}>
                  {project.category === 'initiative' ? 'Initiative' : 'Work'}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                {project.title}
              </h3>

              <p className="text-neutral-400 text-[14px] leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-neutral-900 text-neutral-300 rounded-lg text-xs border border-neutral-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={project.live}
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors group/link font-medium text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-neutral-400 text-lg">No projects found in this category.</p>
        </div>
      )}
        </div>
      </div>
    </section>
  );
}
