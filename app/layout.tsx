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
  description: "PM who ships. Took Fold from startup to Nasdaq listing. Building products for people, not users.",
  openGraph: {
    title: "David Steinbroner | Product Manager & Builder",
    description: "PM who ships. Took Fold from startup to Nasdaq listing. Building products for people, not users.",
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
    description: "PM who ships. Took Fold from startup to Nasdaq listing. Building products for people, not users.",
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
  "description": "PM who ships. Took Fold from startup to Nasdaq listing by owning the messy middle.",
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
