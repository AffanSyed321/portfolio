'use client';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work Experience | Affan Syed Portfolio',
  description: 'Explore Affan Syed\'s professional experience as Growth Marketing Analyst, Founder of FewCuts Inc., Data Analyst at Kerr Industries, and award-winning content creator. See detailed work history and achievements.',
  keywords: ['Affan Syed Experience', 'Growth Marketing Analyst', 'FewCuts Inc Founder', 'Kerr Industries', 'Marketing Career', 'Work History', 'Professional Experience'],
  openGraph: {
    title: 'Work Experience | Affan Syed Portfolio',
    description: 'Explore Affan Syed\'s professional experience in growth marketing, AI systems, and content creation.',
    url: 'https://affansyed.com/projects',
  },
  twitter: {
    title: 'Work Experience | Affan Syed Portfolio',
    description: 'Explore Affan Syed\'s professional experience in growth marketing, AI systems, and content creation.',
  },
};

import React, { useState } from 'react';
import Link from 'next/link';
import ProjectLink from '@/app/projects/projectLink';
import Modal from '@/app/projects/project/modal';
import Layout from '@/components/layout';
import { ModalContext } from './modalContext';

const experiences = [
  {
    title: 'Growth Marketing Analyst',
    company: 'Current Company',
    location: 'Wichita Falls, TX',
    duration: 'May 2024 - Present',
    tag: 'Marketing & AI',
    color: '#000000',
    details: [
      'Used different types of data to improve park marketing strategies: location intelligence, persona data, brand awareness, and local competitive insights, outperforming parks that didn\'t use these techniques by 93.8%.',
      'Scaled outbound marketing campaigns across Meta, TikTok, and email for 68+ locations, boosting international customer engagement by 36.2% through strategic experimentation and customer-backwards approach.',
      'Develop comprehensive pricing models for multi-market strategies using Excel macros and Tableau dashboards, analyzing seasonality and DMA trends with Placer.AI data to optimize customer acquisition and drive conversion across diverse segments.',
      'Developed AI-powered SEO platform with human-in-the-loop workflows leveraging high-quality open-source articles as context and GPT deep research for topic analysis.',
      'Applied LoRA to FLUX (image) and Wan 2.2 (video) to improve visual consistency across creative outputs.',
      'Work cross-functionally with operations, finance, and creative teams to implement scalable programs including email marketing, SMS campaigns, and push notifications across B2B and e-commerce markets.',
      'Managed internship program from January 2025 - May 2025, recruiting and hiring marketing interns.'
    ]
  },
  {
    title: 'Founder and CMO',
    company: 'FewCuts Inc.',
    location: 'Remote',
    duration: '2021 - Present',
    tag: 'Startup',
    color: '#ee5622'
  },
  {
    title: 'Data Analyst — Performance Marketing Specialist',
    company: 'Kerr Industries',
    location: 'Remote',
    duration: 'March 2021–December 2023',
    tag: 'Creator Economy',
    color: 'pink',
    details: [
      'Analyzed international audience targeting using Excel functions and Tableau visualizations to inform global content strategy, improving viewer retention across geographic segments.',
      'Led cross-functional creative team using customer data analysis and performance metrics to guide scalable content planning and execution.'
    ]
  },
  {
    title: 'YouTube Creator & Podcast Host',
    company: 'Independent',
    tag: 'Content Creation',
    color: '#EFE8D3'
  },
  {
    title: '7× American Advertising Award Winner',
    company: 'ADDYs 2024, Fort Worth',
    tag: 'Awards',
    color: '#303030'
  }
];

export default function ProjectsHome() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Layout title={"Where I've Worked"}>
      <div className="m-0">
        <div className="m-0 overflow-hidden">
          {experiences.map((experience, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div key={index}>
                <div onClick={() => toggleExpanded(index)}>
                  <ProjectLink
                    index={index}
                    title={experience.title}
                    tag={experience.tag}
                    company={experience.company}
                    location={experience.location}
                    duration={experience.duration}
                    clickable={!!experience.details}
                  />
                </div>
                {isExpanded && experience.details && (
                  <div className="border-b border-b-gray-600 px-5 pb-8 pt-4">
                    <ul className="ml-4 space-y-3">
                      {experience.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-sm text-black lg:text-base">
                          • {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
