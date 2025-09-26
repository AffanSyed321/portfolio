'use client';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Affan Syed | Growth Marketing Analyst & AI Engineer',
  description: 'Affan Syed - Growth Marketing Analyst specializing in AI-driven marketing systems. 7× American Advertising Award Winner, Founder of FewCuts Inc. Expert in performance marketing, data analytics, and creator economy strategies.',
  keywords: ['Affan Syed', 'Growth Marketing Analyst', 'AI Engineer', 'Marketing Expert', 'FewCuts Founder', 'American Advertising Awards', 'AI Marketing', 'Performance Marketing'],
  openGraph: {
    title: 'Affan Syed | Growth Marketing Analyst & AI Engineer',
    description: 'Growth Marketing Analyst specializing in AI-driven marketing systems. Award-winning marketer and startup founder.',
    url: 'https://affansyed.com',
    type: 'profile',
  },
};
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDownRight } from 'lucide-react';
import SlidingImages from '@/components/home/SlidingImages';
import ContrastCursor from '@/components/animations/cursor/contrastCursor';
import { LetterCollision } from '@/components/animations/textAnimations/scrollText';
import Magnetic from '@/components/animations/magnetic';
import Hero from '@/components/home/hero';
import Description from '@/components/home/Description/description';

const slider1 = [
  {
    color: 'white',
    src: 'stylesync/pca.png'
  },
  {
    color: 'white',
    src: 'stylesync/diagram.png'
  },
  {
    color: '#21242b',
    src: 'catapult-trading/dashboard.png'
  },
  {
    color: '#21242b',
    src: 'm31/controller.jpg'
  }
];
const slider2 = [
  {
    color: '#d4e3ec',
    src: 'm31/specs.png'
  },
  {
    color: '#9289BD',
    src: 'axo/prototype.png'
  },
  {
    color: 'white',
    src: 'm31/app.png'
  },
  {
    color: 'white',
    src: 'stylesync/hero.svg'
  }
];

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(true);
  const scrollContainerRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window?.scrollY > 0) {
        setShowScrollButton(false);
      } else {
        setShowScrollButton(true);
      }
    };

    window?.addEventListener('scroll', handleScroll);

    return () => {
      window?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToHero = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={scrollContainerRef} className="overflow-x-hidden">
      <LetterCollision />
      {showScrollButton && (
        <Magnetic>
          <div
            className="fixed bottom-4 right-8 flex cursor-pointer items-center space-x-2 text-3xl font-semibold sm:bottom-8"
            onClick={scrollToHero}
          >
            <p>Scroll</p>

            <ArrowDownRight strokeWidth={3} className="size-6" />
          </div>
        </Magnetic>
      )}
      <div id="hero" ref={heroRef}>
        <Hero />
      </div>
      <Description />
      <div className="h-[100px]"></div>
      <ContrastCursor isActive={false} text={'View Projects'} />
    </div>
  );
}
