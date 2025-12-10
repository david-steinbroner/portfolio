'use client';

import { useState } from 'react';
import { Project } from '@/lib/markdown';
import Carousel from '@/components/Carousel';
import Card from '@/components/Card';
import Modal from '@/components/Modal';
import Section from '@/components/Section';
import BuildingCard from '@/components/BuildingCard';
import BuiltItem from '@/components/BuiltItem';
import CaseStudyCard from '@/components/CaseStudyCard';

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
        <header className="flex items-center justify-between px-4 md:px-8 py-2 border-b" style={{ borderColor: 'var(--border)' }}>
          <div className="flex-1 flex items-center gap-4 md:gap-8">
            <div>
              <h1 className="text-xl md:text-2xl font-bold mb-0.5" style={{ color: 'var(--text-primary)' }}>
                David Steinbroner
              </h1>
              <p className="text-xs md:text-sm" style={{ color: 'var(--text-secondary)' }}>
                PM & Builder | Shipping daily
              </p>
            </div>

            {/* Social Links - Horizontal Row */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Email */}
              <a
                href="mailto:davidsteinbroner@gmail.com"
                className="transition-opacity hover:opacity-70"
                aria-label="Email"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
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
                  className="w-4 h-4 md:w-5 md:h-5"
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
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>

              {/* Linear - Hidden for now */}
              {/* <a
                href="https://linear.app/@david-steinbroner"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
                aria-label="Linear"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <path d="M2.5 2.5v19h19v-19h-19zm16.5 16.5h-14v-14h14v14zm-11-11h8v8h-8v-8z"/>
                </svg>
              </a> */}
            </div>
          </div>

          {/* Headshot */}
          <img
            src="/images/headshot.jpg"
            alt="David Steinbroner"
            className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
          />
        </header>

        {/* Main Content */}
        <main className="flex-1 px-4 md:px-8 max-w-7xl mx-auto w-full">
          <div className="space-y-8">
            {/* Case Studies Section */}
            <Section title="Case Studies" href="/case-studies">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <CaseStudyCard
                  title="TaxBit Integration"
                  hook="Integrating tax compliance into a crypto app without breaking the user experience"
                  href="/case-studies/taxbit"
                />
                <CaseStudyCard
                  title="Bitcoin Flows"
                  hook="Designing send and receive flows for users who'd never touched crypto"
                  href="/case-studies/bitcoin-flows"
                />
                <CaseStudyCard
                  title="Spin Wheel"
                  hook="An engagement feature that required product, project management, marketing, and vendor coordination"
                  href="/case-studies/spin-wheel"
                />
              </div>
            </Section>

            {/* Building Section */}
            <Section title="Building" href="/building">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <BuildingCard
                  name="Discovering Magic"
                  tagline="MTG deck discovery for people who've never played"
                  status="active"
                  href="https://discoveringmagic.com"
                />
                <BuildingCard
                  name="Local Gov Watch"
                  tagline="Civic tech tracking local government transparency"
                  status="active"
                  href="https://local-gov-watch.pages.dev"
                />
                <BuildingCard
                  name="Portfolio Site"
                  tagline="This site (actively building in public)"
                  status="active"
                  href="https://davidsteinbroner.com"
                />
              </div>
            </Section>

            {/* Built Section */}
            <Section title="Built" href="/built">
              <div className="space-y-1">
                <BuiltItem
                  name="TaxBit Integration"
                  year="2024"
                  description="Tax reporting & cost basis tracking"
                  href="/built/taxbit"
                />
                <BuiltItem
                  name="Spin Wheel"
                  year="2023"
                  description="Gamified engagement lever"
                  href="/built/spin-wheel"
                />
                <BuiltItem
                  name="Bitcoin Receiving"
                  year="2023"
                  description="In-app BTC deposit flow"
                  href="/built/bitcoin-receiving"
                />
                <BuiltItem
                  name="Bitcoin Selling"
                  year="2023"
                  description="In-app BTC liquidation"
                  href="/built/bitcoin-selling"
                />
                <BuiltItem
                  name="Card Reissuance"
                  year="2023"
                  description="Replacement card program"
                  href="/built/card-reissuance"
                />
                <BuiltItem
                  name="Fairytale Project"
                  year="2024"
                  description="Trilingual cultural archive (1,001 entries)"
                  href="/built/fairytale"
                />
              </div>
            </Section>
          </div>
        </main>

        {/* Footer */}
        <footer className="px-8 py-3 border-t" style={{ borderColor: 'var(--border)' }}>
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
