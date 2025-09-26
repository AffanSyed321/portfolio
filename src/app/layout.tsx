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
  title: {
    default: 'Affan Syed | Growth Marketing Analyst & AI Engineer',
    template: '%s | Affan Syed'
  },
  description: 'Growth Marketing Analyst specializing in AI-driven marketing systems. 7× American Advertising Award Winner, Founder of FewCuts Inc. Expert in data analytics, performance marketing, and creator economy strategies.',
  keywords: ['Growth Marketing Analyst', 'AI Marketing', 'Performance Marketing', 'Data Analytics', 'Marketing Strategy', 'AI Engineer', 'Creator Economy', 'FewCuts', 'American Advertising Awards', 'Marketing Automation'],
  authors: [{ name: 'Affan Syed', url: 'https://affansyed.com' }],
  creator: 'Affan Syed',
  publisher: 'Affan Syed',
  metadataBase: new URL('https://affansyed.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://affansyed.com',
    title: 'Affan Syed | Growth Marketing Analyst & AI Engineer',
    description: 'Growth Marketing Analyst specializing in AI-driven marketing systems. 7× American Advertising Award Winner, Founder of FewCuts Inc.',
    siteName: 'Affan Syed Portfolio',
    images: [
      {
        url: '/images/profile2.jpg',
        width: 1200,
        height: 630,
        alt: 'Affan Syed - Growth Marketing Analyst & AI Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affan Syed | Growth Marketing Analyst & AI Engineer',
    description: 'Growth Marketing Analyst specializing in AI-driven marketing systems. 7× American Advertising Award Winner.',
    images: ['/images/profile2.jpg'],
    creator: '@Affansyed321',
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
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual Google Search Console code
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Affan Syed",
    "url": "https://affansyed.com",
    "image": "https://affansyed.com/images/profile2.jpg",
    "sameAs": [
      "https://x.com/Affansyed321",
      "https://www.youtube.com/@AffanSyedx",
      "https://www.linkedin.com/in/affan-syed-mahmood-hussain-0577a6169/"
    ],
    "jobTitle": "Growth Marketing Analyst",
    "description": "Growth Marketing Analyst specializing in AI-driven marketing systems. 7× American Advertising Award Winner, Founder of FewCuts Inc.",
    "knowsAbout": [
      "Growth Marketing",
      "AI Marketing",
      "Performance Marketing",
      "Data Analytics",
      "Marketing Strategy",
      "Creator Economy",
      "Marketing Automation",
      "AI/LLM",
      "Content Strategy"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "7× American Advertising Awards Winner",
        "credentialCategory": "Award",
        "recognizedBy": {
          "@type": "Organization",
          "name": "American Advertising Federation"
        }
      }
    ],
    "founder": [
      {
        "@type": "Organization",
        "name": "FewCuts Inc.",
        "description": "Context-based AI video editor startup"
      }
    ],
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "Osmania University"
      },
      {
        "@type": "CollegeOrUniversity",
        "name": "Midwestern State University"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
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
