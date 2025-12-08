'use client';

import { useRef } from 'react';

interface CarouselProps<T> {
  items: T[];
  renderCard: (item: T, index: number) => React.ReactNode;
}

export default function Carousel<T>({ items, renderCard }: CarouselProps<T>) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  if (items.length === 0) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
          No items to display
        </p>
      </div>
    );
  }

  return (
    <div className="h-full flex items-center">
      {/* Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto py-4 scrollbar-hide w-full"
        style={{
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-none w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
            style={{ scrollSnapAlign: 'start' }}
          >
            {renderCard(item, index)}
          </div>
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
