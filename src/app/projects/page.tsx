'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ProjectLink from '@/app/projects/projectLink';
import Modal from '@/app/projects/project/modal';
import Layout from '@/components/layout';
import { ModalContext } from './modalContext';

const experiences = [
  {
    title: 'Product Marketing Manager',
    company: 'Hoegger Communications',
    location: 'Wichita Falls, TX',
    duration: 'May 2024 - Present',
    tag: 'B2B SaaS & AI',
    color: '#000000',
    details: [
      'Lead product marketing and go-to-market strategy for two B2B SaaS AI products (SEO Alchemy, Vision Studio) from 0→1, acquiring 30+ enterprise clients and surfacing $540K in pipeline opportunities through strategic positioning, competitive battle cards, and sales enablement materials.',
      'Own product launch and sales enablement, collaborating with AI Engineering, Creative, and Sales to develop GTM materials including pitch decks, demo scripts, competitive positioning, product one-pagers, and ROI calculators—reducing creative production time by 10x.',
      'Partner with Product and Engineering teams to define requirements, influence roadmap through market intelligence, and execute launches for technical and enterprise audiences.',
      'Architect AI marketing automation for 38+ e-commerce brands, integrating content generation tools and analytics platforms. Translate AI capabilities into value propositions and positioning frameworks for B2B enterprise and consumer audiences.',
      'Manage campaigns and customer acquisition for 68+ FEC and entertainment brands, leveraging behavioral analytics and experimentation to optimize messaging and creative strategy, achieving 79% above 2025 FEC industry YoY benchmarks.',
      'Present strategic recommendations to C-suite using dashboards tracking ROI, pipeline contribution, and marketing efficiency.',
      'Work cross-functionally with Product, Engineering, Sales, and Creative teams to drive measurable business outcomes through strategic positioning and go-to-market execution.'
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
    title: 'Associate Product Marketing Manager & Marketing Analyst',
    company: 'Kerr Industries',
    location: 'Remote',
    duration: 'March 2021–December 2023',
    tag: 'Creator Economy',
    color: 'pink',
    details: [
      'Developed product positioning and content strategy for YouTube and TikTok channels across international markets. Translated audience research and competitive intelligence into messaging frameworks that improved engagement and retention metrics.',
      'Drove global customer acquisition using Excel, Tableau, SQL, and Python to analyze audience segmentation and optimize campaign targeting. Executed A/B testing frameworks to scale content production across multiple creators and channels.',
      'Built performance dashboards tracking CPM, CPC, engagement, and retention. Presented strategic recommendations to leadership on campaign optimization and multi-market expansion.'
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
