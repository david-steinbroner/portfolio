'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Monitor, Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-8 h-8" /> // Placeholder to prevent layout shift
    );
  }

  const cycleTheme = () => {
    if (theme === 'system') setTheme('light');
    else if (theme === 'light') setTheme('dark');
    else setTheme('system');
  };

  const Icon =
    theme === 'light' ? Sun :
    theme === 'dark' ? Moon :
    Monitor;

  return (
    <button
      onClick={cycleTheme}
      className="p-2 rounded-lg hover:bg-background-secondary transition-colors"
      aria-label={`Current theme: ${theme}. Click to cycle themes.`}
    >
      <Icon className="w-4 h-4 text-foreground-muted hover:text-foreground transition-colors" />
    </button>
  );
}
