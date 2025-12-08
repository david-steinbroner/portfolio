'use client';

import { useEffect } from 'react';
import { Project } from '@/lib/markdown';

interface ModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ project, isOpen, onClose }: ModalProps) {
  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const { metadata, content } = project;

  // Status badge color mapping
  const statusColors = {
    'Live': 'bg-green-100 text-green-800',
    'In Progress': 'bg-yellow-100 text-yellow-800',
    'Shipped': 'bg-blue-100 text-blue-800',
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Modal Content */}
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl animate-slide-up"
        style={{ backgroundColor: 'var(--bg-card)' }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-4 right-4 float-right z-10 w-10 h-10 flex items-center justify-center rounded-full transition-all hover:opacity-70"
          style={{ backgroundColor: 'var(--border)' }}
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{ color: 'var(--text-primary)' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Hero Image */}
        {metadata.image && (
          <div className="w-full h-64 overflow-hidden">
            <img
              src={metadata.image}
              alt={metadata.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <h2
            id="modal-title"
            className="text-3xl font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            {metadata.title}
          </h2>

          {/* Status and Tags Row */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {/* Status Badge */}
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                statusColors[metadata.status] || 'bg-gray-100 text-gray-800'
              }`}
            >
              {metadata.status}
            </span>

            {/* Tags */}
            {metadata.tags && metadata.tags.length > 0 && (
              <>
                {metadata.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{
                      backgroundColor: 'var(--border)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </>
            )}
          </div>

          {/* Description */}
          <p
            className="text-lg mb-6"
            style={{ color: 'var(--text-secondary)' }}
          >
            {metadata.description}
          </p>

          {/* External Links */}
          {(metadata.link || metadata.github) && (
            <div className="flex flex-wrap gap-3 mb-6">
              {metadata.link && (
                <a
                  href={metadata.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg font-medium transition-opacity hover:opacity-80"
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: 'white',
                  }}
                >
                  Visit Website →
                </a>
              )}
              {metadata.github && (
                <a
                  href={metadata.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg font-medium transition-opacity hover:opacity-80 border"
                  style={{
                    borderColor: 'var(--border)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    View on GitHub
                  </span>
                </a>
              )}
            </div>
          )}

          {/* Impact Bullets */}
          {metadata.impact && metadata.impact.length > 0 && (
            <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: 'var(--border)' }}>
              <h3
                className="text-lg font-semibold mb-3"
                style={{ color: 'var(--text-primary)' }}
              >
                Key Impact
              </h3>
              <ul className="space-y-2">
                {metadata.impact.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <span className="mr-2" style={{ color: 'var(--accent)' }}>
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Company (for work features) */}
          {metadata.company && (
            <p className="mb-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <span className="font-semibold">Company:</span> {metadata.company}
            </p>
          )}

          {/* Divider */}
          {content && (
            <hr className="my-6" style={{ borderColor: 'var(--border)' }} />
          )}

          {/* Markdown Content */}
          {content && (
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 200ms ease-out;
        }

        .animate-slide-up {
          animation: slide-up 300ms ease-out;
        }
      `}</style>
    </div>
  );
}
