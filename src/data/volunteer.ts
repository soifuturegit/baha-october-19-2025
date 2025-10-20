export interface VolunteerExperience {
  title: string;
  organization: string;
  period: string;
  description: string;
  excerpt: string;
  image: string;
}

export const volunteerExperiences: VolunteerExperience[] = [
  {
    title: 'Programming and Math Instructor',
    organization: 'InclusionX',
    period: 'May 2023 - Jan 2024',
    excerpt: 'Mentoring underprivileged youth in web development fundamentals...',
    description:
      'Mentoring underprivileged youth in web development fundamentals and modern programming practices. Led comprehensive training sessions covering HTML, CSS, JavaScript, and basic mathematics to help students build a strong foundation for their tech careers.',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Translator',
    organization: 'CS50',
    period: 'Jun 2022 - Sep 2022',
    excerpt: 'Contributing to open-source education and accessibility tools...',
    description:
      'Contributing to open-source projects focused on education and accessibility tools. Translated CS50 course materials to make computer science education accessible to non-English speaking students worldwide.',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Contributor',
    organization: 'The Odin Project',
    period: '2021 - Present',
    excerpt: 'Leading workshops on web development and software engineering...',
    description:
      'Organizing and leading workshops on web development and software engineering practices. Contributing to curriculum development and helping students troubleshoot coding challenges in a supportive community environment.',
    image:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Cadet',
    organization: 'Bangladesh National Cadet Corps - BNCC (Army Wing)',
    period: 'Jul 2019 - Mar 2021',
    excerpt: 'Teaching coding fundamentals to middle school students...',
    description:
      'Teaching coding fundamentals to middle school students through interactive workshops. Developed leadership skills while organizing community service activities and mentoring younger cadets in discipline and teamwork.',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Youth Empowerment Lead',
    organization: 'East Moshang Young Unity',
    period: 'Jan 2017 - Mar 2019',
    excerpt: 'Empowering youth through education and community development...',
    description:
      'Empowering youth through education and community development programs. Organized skills training workshops, mentorship programs, and community service initiatives to help young people reach their full potential.',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
  },
];