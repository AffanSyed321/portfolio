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
  description: 'Affan Syed is a Growth Marketing Analyst from Wichita Falls, Texas, specializing in AI-driven marketing systems. 7× American Advertising Award Winner (ADDYs 2024, Fort Worth), Founder & CMO of FewCuts Inc. AI video editor startup. Computer Science Engineering graduate (Osmania University), MBA Business Analytics (Midwestern State University). Currently Growth Marketing Analyst leading AI-powered marketing pipelines, formerly Data Analyst at Kerr Industries. Expert in performance marketing, data analytics, marketing automation, AI/LLM applications, creator economy, YouTube content creation, and podcast hosting. Known for AI marketing systems, location intelligence frameworks, and customer segmentation strategies.',
  keywords: ['Affan Syed', 'Affan Syed Mahmood Hussain', 'Growth Marketing Analyst', 'AI Marketing', 'Performance Marketing', 'Data Analytics', 'Marketing Strategy', 'AI Engineer', 'Creator Economy', 'FewCuts', 'FewCuts Inc', 'American Advertising Awards', 'Marketing Automation', 'Wichita Falls Texas', 'Osmania University', 'Midwestern State University', 'Kerr Industries', 'YouTube Creator', 'Podcast Host', 'AI Video Editor', 'Marketing Analyst Texas', 'Fort Worth ADDYs', 'AI LLM Marketing', 'Digital Marketing Expert', 'Startup Founder Texas'],
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
        "caption": "Affan Syed - Growth Marketing Analyst and AI Engineer"
      },
      "sameAs": [
        "https://x.com/Affansyed321",
        "https://www.youtube.com/@AffanSyedx",
        "https://www.linkedin.com/in/affan-syed-mahmood-hussain-0577a6169/",
        "https://github.com/affansyed",
        "https://fewcuts.com"
      ],
      "identifier": {
        "@type": "PropertyValue",
        "propertyID": "affansyed.com",
        "value": "Growth Marketing Analyst Affan Syed"
      },
      "jobTitle": ["Growth Marketing Analyst", "AI Engineer", "Marketing Strategist", "Founder"],
      "description": "Affan Syed is a Growth Marketing Analyst specializing in AI-driven marketing systems. 7× American Advertising Award Winner and Founder of FewCuts Inc. Expert in performance marketing, data analytics, and AI marketing automation.",
      "disambiguatingDescription": "Growth Marketing Analyst from Wichita Falls, Texas, known for AI marketing systems and American Advertising Awards.",
      "knowsAbout": [
        "Growth Marketing",
        "AI Marketing",
        "Performance Marketing",
        "Data Analytics",
        "Marketing Strategy",
        "Creator Economy",
        "Marketing Automation",
        "AI/LLM",
        "Content Strategy",
        "Digital Marketing",
        "Marketing Analytics",
        "Customer Acquisition",
        "Conversion Optimization",
        "Social Media Marketing",
        "Email Marketing",
        "SEO",
        "Tableau",
        "Excel",
        "GPT",
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
      "founder": {
        "@type": "Organization",
        "name": "FewCuts Inc.",
        "url": "https://fewcuts.com",
        "description": "Context-based AI video editor startup for creators and brands",
        "foundingDate": "2021",
        "foundingLocation": "Remote"
      },
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
          "name": "Current Company",
          "description": "Growth Marketing Analyst role focusing on AI-powered marketing pipelines"
        },
        {
          "@type": "Organization",
          "name": "Kerr Industries",
          "description": "Data Analyst — Performance Marketing Specialist (March 2021–December 2023)"
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
      "description": "Official website of Affan Syed - Growth Marketing Analyst, AI Engineer, and Founder",
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
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "FewCuts Inc.",
      "url": "https://fewcuts.com",
      "founder": {
        "@id": "https://affansyed.com/#person"
      },
      "description": "Context-based AI video editor startup founded by Affan Syed",
      "foundingDate": "2021",
      "industry": "AI Video Technology"
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
