'use client';

import { useEffect, useState } from 'react';

interface TOCItem {
  id: string;
  text: string;
}

interface TableOfContentsProps {
  content: string;
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);

  // Extract h2 headings from HTML content
  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const h2Elements = doc.querySelectorAll('h2');

    const items: TOCItem[] = Array.from(h2Elements).map((h2) => {
      const text = h2.textContent || '';
      const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      return { id, text };
    });

    setHeadings(items);
  }, [content]);

  // Add IDs to actual DOM h2 elements and set up Intersection Observer
  useEffect(() => {
    if (headings.length === 0) return;

    // Add IDs to h2 elements in the DOM
    const h2Elements = document.querySelectorAll('.prose h2');
    h2Elements.forEach((h2, index) => {
      if (headings[index]) {
        h2.id = headings[index].id;
      }
    });

    // Set up Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
      }
    );

    h2Elements.forEach((h2) => {
      observer.observe(h2);
    });

    return () => {
      h2Elements.forEach((h2) => {
        observer.unobserve(h2);
      });
    };
  }, [headings]);

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (headings.length === 0) return null;

  return (
    <nav
      className={`toc-container transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <button
              onClick={() => handleClick(heading.id)}
              className={`text-left text-xs leading-relaxed transition-colors ${
                activeId === heading.id
                  ? 'text-foreground border-l-2 border-foreground pl-2 -ml-2'
                  : 'text-foreground-muted hover:text-foreground-secondary'
              }`}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
