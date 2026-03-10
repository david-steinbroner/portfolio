'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function BitcoinFlywheelRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/case-studies/fiat-bitcoin-ecosystem');
  }, [router]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <p className="text-foreground-muted">Redirecting...</p>
    </div>
  );
}
