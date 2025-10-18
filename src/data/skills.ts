export interface SkillCategory {
  category: string;
  items: string[];
  icon: string;
}

export const skills: SkillCategory[] = [
  {
    category: 'Technical Development',
    icon: 'Code2',
    items: [
      'JavaScript, TypeScript, Python, C, HTML, CSS',
      'React, Next.js, Tailwind CSS, Astro',
      'Node.js, Supabase, Firebase',
      'GitHub, Netlify, Vercel, Docker, Cursor',
      'WordPress, Elementor, Divi, Webflow, Wix'
    ]
  },
  {
    category: 'AI & Automation',
    icon: 'Bot',
    items: [
      'OpenAI API, Claude API, Bolt.new, Lovable, V0',
      'Prompt Engineering (ChatGPT, Gemini, Claude, Grok, DeepSeek)',
      'Zapier, Make.com, n8n, Google Apps Script, Ollama'
    ]
  },
  {
    category: 'Business & Marketing',
    icon: 'TrendingUp',
    items: [
      'HubSpot, GoHighLevel, Notion Database, Airtable, Zoho CRM',
      'SEO, Meta Ads, Google Ads, LinkedIn Ads, TikTok Ads',
      'Mailchimp, Beehiiv, Social Media Strategy',
      'Performance Marketing & Analytics'
    ]
  },
  {
    category: 'Design & Content',
    icon: 'Palette',
    items: [
      'Figma, Canva, Photoshop, Midjourney',
      'CapCut, Loom, Descript, DaVinci Resolve',
      'UX/UI Design, Relume, Webflow'
    ]
  },
  {
    category: 'Project Management',
    icon: 'Kanban',
    items: [
      'ClickUp, Notion, Asana, Monday.com, Trello, Airtable',
      'Slack, Google Suite, Microsoft Office'
    ]
  },
  {
    category: 'Languages',
    icon: 'Languages',
    items: [
      'Native: Bangla',
      'Fluent: English (Duolingo Test Score: 125/160)'
    ]
  }
];

export interface Interest {
  title: string;
  icon: string;
}

export const interests: Interest[] = [
  { title: 'Problem-solving', icon: 'Lightbulb' },
  { title: 'Technology Entrepreneurship', icon: 'Rocket' },
  { title: 'Startup & SaaS', icon: 'Zap' },
  { title: 'AI & Automation', icon: 'Bot' },
  { title: 'Software Development', icon: 'Code' },
  { title: 'Business & Product Development', icon: 'Briefcase' },
  { title: 'People Management', icon: 'Users' },
  { title: 'Social Business', icon: 'Heart' },
  { title: 'Youth Development', icon: 'GraduationCap' },
  { title: 'EdTech', icon: 'BookOpen' },
  { title: 'Tennis', icon: 'Dumbbell' },
  { title: 'Cricket', icon: 'Trophy' },
  { title: 'Fitness', icon: 'Activity' },
  { title: 'Learning New Skills', icon: 'Target' },
  { title: 'Collecting Books', icon: 'Library' },
  { title: 'Helping Others', icon: 'HandHeart' },
  { title: 'Giving Away', icon: 'Gift' }
];
