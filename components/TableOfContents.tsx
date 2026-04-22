'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface TOCItem {
  id: string;
  text: string;
}

interface FeatureLink {
  name: string;
  slug: string;
}

interface TableOfContentsProps {
  // Kept for backwards compatibility with the case-study page call site.
  // The component now reads heading ids directly from the rendered DOM
  // (generated server-side by rehype-slug), so `content` is unused.
  content?: string;
  features?: FeatureLink[];
}

export default function TableOfContents({ features }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);

  // Sync the TOC with the server-rendered headings in the DOM.
  // rehype-slug already stamped stable id="" attributes on each heading during
  // the markdown build, so this effect only *reads* — it never generates or
  // mutates ids. (Legitimate DOM sync, not a "setMounted" hydration dodge.)
  useEffect(() => {
    const article = document.querySelector('article');
    if (!article) return;

    const headingEls = article.querySelectorAll<HTMLHeadingElement>('h2[id]');

    const items: TOCItem[] = Array.from(headingEls).map((el) => ({
      id: el.id,
      // Prefer the heading's own text, stripping any autolink anchor markup.
      text: (el.textContent || '').trim(),
    }));

    // Legitimate external-state sync: we're pulling server-rendered heading
    // ids from the DOM into React state. This is exactly the case the React
    // docs describe as appropriate for setState-in-effect (syncing with an
    // external system), but the static rule can't tell the difference.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHeadings(items);

    if (items.length === 0) return;

    // Intersection observer to highlight the current section in the TOC.
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

    headingEls.forEach((el) => observer.observe(el));

    return () => {
      headingEls.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  // Reveal the TOC once the reader has scrolled past the hero.
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

  if (headings.length === 0 && (!features || features.length === 0)) {
    return null;
  }

  return (
    <nav
      className={`toc-container transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Features Section */}
      {features && features.length > 0 && (
        <>
          <p className="text-[10px] uppercase tracking-wider text-foreground-muted mb-2">
            Features
          </p>
          <ul className="space-y-2 mb-4">
            {features.map((feature) => (
              <li key={feature.slug}>
                <Link
                  href={`/features/${feature.slug}`}
                  className="text-xs leading-relaxed text-foreground-muted hover:text-foreground-secondary transition-colors"
                >
                  {feature.name}
                </Link>
              </li>
            ))}
          </ul>
          {headings.length > 0 && <hr className="border-border mb-4" />}
        </>
      )}

      {/* Sections */}
      {headings.length > 0 && (
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
      )}
    </nav>
  );
}
