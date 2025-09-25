import { Inter } from 'next/font/google';
import './globals.css';
import React, { ReactNode } from 'react';
import { Metadata } from 'next';
import Animations from './animations';
import Header from '@/components/layout/header';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from '@/components/ui/toaster';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Affan Syed | Growth Marketing Analyst & AI Builder",
  description: 'Award-winning Growth Marketing Analyst specializing in AI-driven marketing systems. Founder of FewCuts Inc. 7× American Advertising Award Winner. Expert in marketing automation, AI tools, and creator economy.',
  keywords: [
    'Growth Marketing Analyst',
    'AI Marketing',
    'Marketing Automation',
    'FewCuts',
    'AI Video Editor',
    'American Advertising Awards',
    'Marketing Strategy',
    'Creator Economy',
    'YouTube Creator',
    'Podcast Host',
    'MBA Business Analytics',
    'Affan Syed'
  ],
  authors: [{ name: 'Affan Syed' }],
  creator: 'Affan Syed',
  publisher: 'Affan Syed',
  openGraph: {
    title: "Affan Syed | Growth Marketing Analyst & AI Builder",
    description: 'Award-winning Growth Marketing Analyst specializing in AI-driven marketing systems. Founder of FewCuts Inc. 7× American Advertising Award Winner.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Affan Syed Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Affan Syed | Growth Marketing Analyst & AI Builder",
    description: 'Award-winning Growth Marketing Analyst specializing in AI-driven marketing systems. Founder of FewCuts Inc. 7× American Advertising Award Winner.',
    creator: '@affansyed'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <SpeedInsights />
      <body className="overflow-scroll overflow-x-hidden">
        <Animations>
          <main>
            <Header />
            <div className="flex flex-col bg-background text-foreground">
              <main className={`flex-grow ${inter.className}`}>{children}</main>
              <Analytics />
            </div>
            <Toaster />
          </main>
        </Animations>
      </body>
    </html>
  );
}
