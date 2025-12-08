import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ComingSoon from "@/components/ComingSoon";

// Toggle this to show/hide "Coming Soon" page
const COMING_SOON_MODE = false;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "David Steinbroner - Product Manager & Full-Stack Developer",
  description: "Product Manager with 5+ years experience in fintech, specializing in bitcoin, payments, and user engagement. Building full-stack projects and prototypes.",
  icons: { icon: [] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {COMING_SOON_MODE ? <ComingSoon /> : children}
      </body>
    </html>
  );
}
