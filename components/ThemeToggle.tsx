'use client';

import { useTheme } from 'next-themes';
import { useSyncExternalStore } from 'react';
import { Monitor, Sun, Moon } from 'lucide-react';

// useSyncExternalStore-based "is this the client?" check. Returns `false`
// during SSR and on the first render, then `true` thereafter — which lets us
// dodge hydration mismatch without calling setState inside a useEffect
// (the pattern flagged by react-hooks/set-state-in-effect in React 19).
const emptySubscribe = () => () => {};
const useHasMounted = () =>
  useSyncExternalStore(
    emptySubscribe,
    () => true,  // client snapshot
    () => false  // server snapshot
  );

export default function ThemeToggle() {
  const mounted = useHasMounted();
  const { theme, setTheme } = useTheme();

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
