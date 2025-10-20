import { useState, useEffect, useRef } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const observer = new IntersectionObserver((entries) => {
      const intersectingEntries = entries.filter(entry => entry.isIntersecting);

      if (intersectingEntries.length > 0) {
        const mostVisible = intersectingEntries.reduce((prev, current) => {
          return current.intersectionRatio > prev.intersectionRatio ? current : prev;
        });

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
          setActiveSection(mostVisible.target.id);
        }, 100);
      }
    }, options);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return activeSection;
}