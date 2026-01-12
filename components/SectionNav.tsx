'use client';

import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'building', label: 'Building' },
  { id: 'built', label: 'Built' },
];

const SCROLL_THRESHOLD = 200;

export default function SectionNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  // Handle visibility based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for active section detection
  useEffect(() => {
    const sections = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
      aria-label="Section navigation"
    >
      <ul className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-sm">
        {SECTIONS.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => handleClick(section.id)}
              className={`px-3 py-2 min-h-[44px] rounded-full text-sm font-medium transition-colors ${
                activeSection === section.id
                  ? 'bg-foreground text-background'
                  : 'text-foreground-muted hover:text-foreground hover:bg-background-secondary'
              }`}
              aria-current={activeSection === section.id ? 'true' : undefined}
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
