export interface FounderFeedback {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  feedback: string;
}

export const founderFeedback: FounderFeedback[] = [
  {
    id: 1,
    name: "Jasen Fici",
    role: "Founder",
    company: "Sass Expert",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
    rating: 5,
    feedback: "Baha is excellent at his job. Comes up with proactive ideas to help improve all the time and exceeds expectations in all aspects. We would use him again for any social media project."
  },
  {
    id: 2,
    name: "Gabriel Gabby",
    role: "Founder",
    company: "Creative Anatomy",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
    rating: 5,
    feedback: "Baha's has been an invaluable addition to my team. His expertise with Notion, from building out databases to training others, has freed time for me to focus on other aspects of my business. He's eager and devoted to the best outcome. Thank you Baha!"
  },
  {
    id: 3,
    name: "Marcus Thompson",
    role: "CEO",
    company: "TechVision Inc",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    rating: 5,
    feedback: "The goat the legend Baha, but on a serious note he help me a ton. The website he did looks fantastic for one, any request i had Baha was on top of it like flash lol."
  },
  {
    id: 4,
    name: "Sarah Mitchell",
    role: "Founder",
    company: "Digital Spark",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    rating: 5,
    feedback: "Baha did a great job on this site. There was a miscommunication on a few details and he went above and beyond to make it work. Super talented, designer!"
  }
];
