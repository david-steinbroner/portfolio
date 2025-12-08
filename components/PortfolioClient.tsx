'use client';

import { useState } from 'react';
import { Project } from '@/lib/markdown';
import Carousel from '@/components/Carousel';
import Card from '@/components/Card';
import Modal from '@/components/Modal';

interface PortfolioClientProps {
  projects: Project[];
  workFeatures: Project[];
}

export default function PortfolioClient({ projects, workFeatures }: PortfolioClientProps) {
  const [activeTab, setActiveTab] = useState<'work' | 'projects'>('work');
  const [selectedItem, setSelectedItem] = useState<Project | null>(null);

  // Get items based on active tab
  const items = activeTab === 'work' ? workFeatures : projects;

  return (
    <>
      <div className="min-h-screen flex flex-col" style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-family)'
      }}>
        {/* Header Section */}
        <header className="flex items-center justify-between px-8 py-4 border-b" style={{ borderColor: 'var(--border)' }}>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
              David Steinbroner
            </h1>
            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
              Full-Stack PM & Builder
            </p>
          </div>
          {/* Headshot */}
          <img
            src="/images/headshot.jpg"
            alt="David Steinbroner"
            className="w-24 h-24 rounded-full object-cover"
          />
        </header>

        {/* Intro Copy Block */}
        <section className="px-8 py-3">
          <p className="text-base max-w-4xl" style={{ color: 'var(--text-secondary)' }}>
            Product manager who builds. I do strategy, design, and GTM. I use AI to prototype and
            ship — with a team or without one. Work is what I've led. Projects is what I've built.
          </p>
        </section>

        {/* Centered Tabs + Carousel Section */}
        <div className="flex-1 flex flex-col justify-center overflow-hidden">
          {/* Tab Switcher */}
          <div className="px-8 flex gap-6 border-b flex-shrink-0" style={{ borderColor: 'var(--border)' }}>
            <button
              onClick={() => setActiveTab('work')}
              className="px-4 py-2 font-medium transition-all relative cursor-pointer"
              style={{
                color: activeTab === 'work' ? 'var(--accent)' : 'var(--text-secondary)',
              }}
            >
              Work
              {activeTab === 'work' && (
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ backgroundColor: 'var(--accent)' }}
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className="px-4 py-2 font-medium transition-all relative cursor-pointer"
              style={{
                color: activeTab === 'projects' ? 'var(--accent)' : 'var(--text-secondary)',
              }}
            >
              Projects
              {activeTab === 'projects' && (
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ backgroundColor: 'var(--accent)' }}
                />
              )}
            </button>
          </div>

          {/* Carousel Area */}
          <main className="overflow-hidden flex-shrink-0 px-12 md:px-16" style={{ height: '320px' }}>
            <Carousel
              items={items}
              renderCard={(item) => (
                <Card
                  title={item.metadata.title}
                  description={item.metadata.description}
                  image={item.metadata.image}
                  onClick={() => setSelectedItem(item)}
                />
              )}
            />
          </main>
        </div>

        {/* Footer */}
        <footer className="px-8 py-4 border-t flex items-center justify-center gap-8"
                style={{ borderColor: 'var(--border)' }}>
          {/* Email */}
          <a
            href="mailto:davidsteinbroner@gmail.com"
            className="transition-opacity hover:opacity-70"
            aria-label="Email"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ color: 'var(--text-secondary)' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/davidsteinbroner/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70"
            aria-label="LinkedIn"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              style={{ color: 'var(--text-secondary)' }}
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/da6ds"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70"
            aria-label="GitHub"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              style={{ color: 'var(--text-secondary)' }}
            >
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
        </footer>
      </div>

      {/* Modal */}
      <Modal
        project={selectedItem}
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </>
  );
}
