'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CollapsibleImpactProps {
  impact: string[];
}

export default function CollapsibleImpact({ impact }: CollapsibleImpactProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-12 rounded-lg border border-border bg-background-secondary overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 cursor-pointer hover:bg-background-secondary/80 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-medium text-foreground-muted uppercase tracking-wider">
          Impact
        </span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-foreground-muted" />
        ) : (
          <ChevronDown className="w-4 h-4 text-foreground-muted" />
        )}
      </button>
      {isOpen && (
        <ul className="px-6 pb-6 space-y-2">
          {impact.map((item, index) => (
            <li
              key={index}
              className="text-foreground-secondary leading-relaxed flex items-start"
            >
              <span className="mr-2 text-foreground-muted">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
