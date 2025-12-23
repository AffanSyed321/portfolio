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
    default: 'Affan Syed | Product Marketing Manager | B2B SaaS',
    template: '%s | Affan Syed'
  },
  description: 'Affan Syed is a Product Marketing Manager with 4+ years in B2B SaaS go-to-market strategy. Led 0→1 launches for two AI products, driving enterprise client acquisition and pipeline growth. 7× American Advertising Award Winner. Technical background (CS + MBA Analytics) enables collaboration on complex AI/ML products. Expert in product launches, sales enablement, competitive intelligence, and strategic positioning.',
  keywords: ['Affan Syed', 'Affan Syed Mahmood Hussain', 'Product Marketing Manager', 'B2B SaaS Marketing', 'Go-to-Market Strategy', 'GTM Strategy', 'Product Launch', 'Sales Enablement', 'Technical Product Marketing', 'Competitive Intelligence', 'Product Positioning', 'AI Products', 'B2B Marketing', 'SaaS Marketing', 'Product Marketing', 'American Advertising Awards', 'Wichita Falls Texas', 'Osmania University', 'Midwestern State University', 'Fort Worth ADDYs', 'Product Marketing Texas', 'Enterprise Marketing'],
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
    title: 'Affan Syed | Product Marketing Manager | B2B SaaS',
    description: 'Product Marketing Manager with 4+ years in B2B SaaS go-to-market strategy. Led 0→1 launches for two AI products, driving enterprise client acquisition and pipeline growth.',
    siteName: 'Affan Syed Portfolio',
    images: [
      {
        url: '/images/profile2.jpg',
        width: 1200,
        height: 630,
        alt: 'Affan Syed - Product Marketing Manager',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affan Syed | Product Marketing Manager | B2B SaaS',
    description: 'Product Marketing Manager with 4+ years in B2B SaaS go-to-market strategy. Led 0→1 launches for two AI products, driving enterprise client acquisition and pipeline growth.',
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
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://affansyed.com/#person",
      "name": "Affan Syed",
      "alternateName": ["Affan Syed Mahmood Hussain", "Affan Mahmood", "Affan S."],
      "url": "https://affansyed.com",
      "mainEntityOfPage": "https://affansyed.com",
      "image": {
        "@type": "ImageObject",
        "url": "https://affansyed.com/images/profile2.jpg",
        "width": 400,
        "height": 400,
        "caption": "Affan Syed - Product Marketing Manager"
      },
      "sameAs": [
        "https://x.com/Affansyed321",
        "https://www.youtube.com/@AffanSyedx",
        "https://www.linkedin.com/in/affan-syed-mahmood-hussain-0577a6169/",
        "https://github.com/affansyed321"
      ],
      "identifier": {
        "@type": "PropertyValue",
        "propertyID": "affansyed.com",
        "value": "Product Marketing Manager Affan Syed"
      },
      "jobTitle": ["Product Marketing Manager", "Technical Product Marketer", "Marketing Strategist"],
      "description": "Affan Syed is a Product Marketing Manager with 4+ years in B2B SaaS go-to-market strategy. Led 0→1 launches for two AI products, driving enterprise client acquisition and pipeline growth. 7× American Advertising Award Winner.",
      "disambiguatingDescription": "Product Marketing Manager from Wichita Falls, Texas, known for B2B SaaS product launches and American Advertising Awards.",
      "knowsAbout": [
        "Product Marketing",
        "Go-to-Market Strategy",
        "B2B SaaS Marketing",
        "Product Launch Strategy",
        "Sales Enablement",
        "Competitive Intelligence",
        "Product Positioning",
        "Strategic Messaging",
        "Technical Product Marketing",
        "Cross-Functional Collaboration",
        "Market Research",
        "Customer Segmentation",
        "Battle Cards",
        "Product-Market Fit",
        "AI Products",
        "Marketing Technology",
        "Data Analytics",
        "Creator Economy",
        "Tableau",
        "Excel",
        "SQL",
        "Python",
        "Video Editing",
        "Podcast Hosting"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "7× American Advertising Awards Winner",
          "credentialCategory": "Award",
          "recognizedBy": {
            "@type": "Organization",
            "name": "American Advertising Federation",
            "url": "https://www.aaf.org"
          },
          "dateCreated": "2024"
        }
      ],
      "alumniOf": [
        {
          "@type": "CollegeOrUniversity",
          "name": "Osmania University",
          "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "name": "Computer Science Engineering"
          }
        },
        {
          "@type": "CollegeOrUniversity",
          "name": "Midwestern State University",
          "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "name": "MBA in Business Analytics"
          }
        }
      ],
      "worksFor": [
        {
          "@type": "Organization",
          "name": "Hoegger Communications",
          "description": "Product Marketing Manager leading go-to-market strategy for B2B SaaS AI products"
        },
        {
          "@type": "Organization",
          "name": "Kerr Industries",
          "description": "Associate Product Marketing Manager & Marketing Analyst (March 2021–December 2023)"
        }
      ],
      "award": [
        "7× American Advertising Awards Winner (2024)",
        "Fort Worth ADDYs 2024 Winner"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "TX",
        "addressCountry": "US",
        "addressLocality": "Wichita Falls"
      },
      "nationality": "American"
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://affansyed.com/#website",
      "url": "https://affansyed.com",
      "name": "Affan Syed Portfolio",
      "description": "Official website of Affan Syed - Product Marketing Manager and B2B SaaS Specialist",
      "publisher": {
        "@id": "https://affansyed.com/#person"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://affansyed.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }
  ];

  return (
    <html lang="en">
      <head>
        {structuredData.map((data, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(data),
            }}
          />
        ))}
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
