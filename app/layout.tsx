import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.davidsteinbroner.com'),
  title: "David Steinbroner | Product Manager & Builder",
  description: "Senior PM and employee 11 at the first bitcoin-native fintech to list on Nasdaq. I've shipped product across community, growth, a fully integrated bitcoin-and-fiat platform, and compliance. Now I ship live products solo with AI.",
  openGraph: {
    title: "David Steinbroner | Product Manager & Builder",
    description: "Senior PM and employee 11 at the first bitcoin-native fintech to list on Nasdaq. I've shipped product across community, growth, a fully integrated bitcoin-and-fiat platform, and compliance. Now I ship live products solo with AI.",
    url: "https://www.davidsteinbroner.com",
    type: "profile",
    images: [
      {
        url: "/images/og-card.png",
        width: 1200,
        height: 630,
        alt: "David Steinbroner",
      },
    ],
  },
  twitter: {
    title: "David Steinbroner | Product Manager & Builder",
    description: "Senior PM and employee 11 at the first bitcoin-native fintech to list on Nasdaq. I've shipped product across community, growth, a fully integrated bitcoin-and-fiat platform, and compliance. Now I ship live products solo with AI.",
    card: "summary_large_image",
    images: ["/images/og-card.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "David Steinbroner",
  "url": "https://www.davidsteinbroner.com",
  "jobTitle": "Product Manager",
  "description": "Senior PM and employee 11 at the first bitcoin-native fintech to list on Nasdaq. Ships live products solo with AI, spec to deployed.",
  "sameAs": [
    "https://linkedin.com/in/davidsteinbroner",
    "https://github.com/david-steinbroner"
  ],
  "knowsAbout": ["Product Management", "Fintech", "Bitcoin", "AI-Assisted Development"],
  "image": "https://www.davidsteinbroner.com/images/headshot.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
