'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/work', label: 'Work Experience' },
    { href: '/projects', label: 'Projects' },
  ];

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link href="/" className="flex items-center font-bold text-xl">
              David Steinbroner
            </Link>
            <div className="hidden sm:flex sm:space-x-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    pathname === link.href
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="mailto:davidsteinbroner@gmail.com"
              className="text-gray-500 hover:text-gray-700"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/davidsteinbroner/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
