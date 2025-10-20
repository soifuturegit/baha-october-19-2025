import { useEffect } from 'react';
import { useSectionContext } from '../context/SectionContext';

const sectionIds = [
  'education',
  'experience',
  'projects',
  'gallery',
  'companies',
  'founder-feedback',
  'references',
  'impact',
  'achievements',
  'skills-interests'
];

export function useScrollSectionDetect() {
  const { setOpenSection } = useSectionContext();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setOpenSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setOpenSection]);
}
