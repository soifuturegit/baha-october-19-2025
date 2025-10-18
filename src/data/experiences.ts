export interface Experience {
  title: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  achievements: string[];
  skills: string[];
  type: 'full-time' | 'part-time' | 'freelance' | 'contract';
  logo: string;
  url?: string;
}

export const experiences: Experience[] = [
  {
    title: 'Tech Lead, Operations & Digital Strategist',
    company: 'BabylonBD',
    period: 'April 2025 - Present',
    location: 'Hybrid / Dhaka, Bangladesh',
    type: 'full-time',
    description: 'BabylonBD is a group company that has Hospitality, IT, and Travel Business',
    achievements: [
      'Improved the company\'s digital presence and boosted its Google Search rank from 50th to a top-2 position within two months by redesigning and developing 3 web applications and updating all social media profiles and branding',
      'Increased employee performance by approximately 50% by building a custom task and communication management system from the ground up',
      'Streamlined the sales process by 30% by developing an all-in-one CRM to manage customer data, generate invoices, and efficiently send receipts',
      'Enhanced the skills of the workforce by training 4 employees in sales communication and introducing a daily learning system to support long-term growth',
      'Established clear operational frameworks by auditing all company procedures and building new SOPs for the tech, sales, communication, and marketing departments'
    ],
    skills: ['Web Development', 'Digital Strategy', 'CRM Development', 'SEO', 'Team Training', 'Operations Management', 'SOP Development'],
    url: 'https://babylonbd.com',
    logo: 'https://live.staticflickr.com/65535/54301804601_f423b77250_b.jpg'
  },
  {
    title: 'Freelance Full-Stack Developer, Digital Strategist',
    company: 'Freelance',
    period: 'Mar 2025 - Present',
    location: 'Remote',
    type: 'freelance',
    description: 'Provide end-to-end web development services and develop digital business strategy for a diverse range of global clients, from startups to established local and e-commerce businesses.',
    achievements: [
      'Saved clients an average of 10 hours per week by developing a custom client management dashboard (React, Node.js) that automated key administrative tasks',
      'Increased client productivity by over 20 hours per month by building custom automation tools for automated online research and web scraping',
      'Enhanced security and user experience for multiple clients by successfully migrating 5+ websites from legacy WordPress systems to modern, high-performance frameworks like Next.js',
      'Improved project efficiency and client communication by designing and implementing SOPs and custom project management systems within Notion'
    ],
    skills: ['React', 'Node.js', 'Next.js', 'Automation', 'Web Scraping', 'WordPress Migration', 'Project Management', 'Notion'],
    logo: 'https://live.staticflickr.com/65535/54301804601_f423b77250_b.jpg'
  },
  {
    title: 'Software and Fulfilment Lead',
    company: 'oLab',
    period: 'Feb 2024 - Apr 2025',
    location: 'Hybrid / Dhaka, Bangladesh',
    type: 'full-time',
    description: 'Software Automation & Digital Marketing Agency based in Sydney, Australia',
    achievements: [
      'Secured 3 new clients, generating over $40,000 in annual revenue, by conducting 50+ weekly sales calls and delivering detailed performance reports for a key manufacturing partner',
      'Enhanced the digital presence and functionality for multiple clients by designing and launching 5 new websites from scratch and completely rebuilding 3 legacy sites',
      'Developed a custom automation tool for a financial investment client that analyzed market data to provide automated investment suggestions, directly supporting their portfolio strategy',
      'Improved client operational efficiency by identifying and automating key recurring business tasks, including CRM management and social media updates',
      'Strengthened team capabilities by mentoring 3 junior members in web development, automation, and digital marketing, helping them grow into more senior roles'
    ],
    skills: ['Web Development', 'Automation', 'Sales', 'Digital Marketing', 'Team Mentoring', 'CRM', 'Client Management'],
    url: 'https://olab.com.au',
    logo: 'https://live.staticflickr.com/65535/54301804601_f423b77250_b.jpg'
  },
  {
    title: 'Product Developer & Content',
    company: 'Vocab Practice',
    period: 'Oct 2023 - July 2024',
    location: 'Remote / Dhaka, Bangladesh',
    type: 'contract',
    description: 'Edtech platform for English vocabulary & grammar prep for competitive exams',
    achievements: [
      'Grew the paid student base by 200% (from 10K to 30K+) by developing a marketing strategy and an innovative, engaging story-based learning feature',
      'Built the platform\'s core curriculum by researching and compiling over 1,200 high-frequency exam vocabulary words and authoring a complete digital grammar guide',
      'Contributed to product development and content creation'
    ],
    skills: ['Product Development', 'Content Creation', 'EdTech', 'Marketing Strategy', 'Curriculum Development'],
    url: 'https://vocabpractice.com',
    logo: 'https://vocabpractice.com/assets/images/vocabpractice.png'
  },
  {
    title: 'Promotion And Public Relations Executive',
    company: 'Aemers',
    period: 'Sep 2022 - Jan 2023',
    location: 'Hybrid Dhanmondi / Dhaka',
    type: 'part-time',
    description: 'Aemers is a US Company that helps students get prepared for competitive exams & higher studies',
    achievements: [
      'Increased social media reach by 3x and online presence by 50% by establishing the company\'s social profiles, creating all content, and managing paid ad campaigns',
      'Generated a 5% growth in new leads by building a targeted Facebook group community to collect data for email marketing campaigns',
      'Developed the team\'s digital marketing skills by training peers on effective Facebook advertising strategies and best practices'
    ],
    skills: ['Social Media Marketing', 'Content Creation', 'Facebook Ads', 'Email Marketing', 'Team Training'],
    url: 'https://aemers.com',
    logo: 'https://live.staticflickr.com/65535/54300941782_447110db03_b.jpg'
  },
  {
    title: 'Customer Support & Community Manager',
    company: 'Passive Journal',
    period: 'Feb 2022 - Sep 2022',
    location: 'Remote / Dhaka, Bangladesh',
    type: 'full-time',
    description: 'Offer online courses on digital skill development',
    achievements: [
      'Reduced customer support inquiries by 30% by developing and launching a comprehensive self-service knowledge base from scratch',
      'Successfully restored and organized over 15,000 critical student records after a data loss incident, preventing major operational disruption',
      'Managed and grew a thriving online community of over 20,000 students, providing both curriculum support and technical assistance to ensure high engagement via email and call support',
      'Launched and administered the first-ever NFT bootcamp in Bangladesh, successfully onboarding and supporting a new community of 2,000+ members'
    ],
    skills: ['Customer Support', 'Community Management', 'Data Recovery', 'Knowledge Base Development', 'Technical Support'],
    url: 'https://passivejournal.com',
    logo: 'https://live.staticflickr.com/65535/54302064994_aba9830668_b.jpg'
  },
  {
    title: 'Community Manager',
    company: 'Apar\'s Classroom',
    period: 'Apr 2020 - July 2021',
    location: 'Remote / Dhaka, Bangladesh',
    type: 'part-time',
    description: 'Second-largest edtech platform in Bangladesh that offers K-12 academic courses via 3D lectures.',
    achievements: [
      'Grew the online student community by 900% (from 30K to over 300K members) by creating engaging academic content and providing daily guidance and support to 30+ students',
      'Played a key role in launching Bangladesh\'s first K-12 crash course, personally driving over 750 student enrollments and generating ~$1,200 in sales commissions'
    ],
    skills: ['Community Management', 'Content Creation', 'Student Support', 'Sales', 'EdTech'],
    url: 'https://aparsclassroom.com',
    logo: 'https://live.staticflickr.com/65535/54302067168_1275cfc288_b.jpg'
  }
];
