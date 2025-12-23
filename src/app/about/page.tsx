'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useSpotify } from '@/hooks/useSpotify';
import Layout from '@/components/layout';
import { useGitHub } from '@/hooks/useGithub';
import GitHubContributionsGraph from '@/app/about/githubActivity';
import SpotifyPlaylists from '@/app/about/spotifyPlaylists';
import Link from 'next/link';

export default function About() {
  const starsRef = useRef<HTMLDivElement>(null);
  const {
    playlists,
    isLoading: spotifyLoading,
    error: spotifyError,
    topTracks
  } = useSpotify();

  const {
    githubData,
    isLoading: githubLoading,
    error: githubError
  } = useGitHub();

  useEffect(() => {
    // Animate stars
    if (!starsRef.current) return;
    gsap.to(starsRef.current?.children, {
      y: 'random(-20, 20)',
      x: 'random(-20, 20)',
      rotation: 'random(-360, 360)',
      duration: 3,
      ease: 'none',
      repeat: -1,
      yoyo: true,
      stagger: 0.1
    });
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#A2CFFE] to-yellow-200">
      <Layout title="I'm Affan" center>
        <div className="relative min-h-screen">
          <div ref={starsRef}>
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute h-1 w-1 rounded-full bg-white opacity-70"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`
                }}
              />
            ))}
          </div>

          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              <div className="flex flex-col gap-10">
                <div className="relative">
                  <div className="rounded-full blur-3xl" />
                  <Image
                    className="relative z-10 mx-auto h-auto w-full max-w-sm rounded-t-full shadow-lg"
                    width={1440}
                    height={1800}
                    src="/images/profile-about.jpg"
                    alt="Profile picture"
                  />
                </div>
                {spotifyLoading ? (
                  <div></div>
                ) : spotifyError ? (
                  <div></div>
                ) : playlists && playlists.length > 0 ? (
                  <SpotifyPlaylists playlists={playlists} />
                ) : null}
              </div>

              <div className="flex flex-col gap-10">
                <div className="text-primary-950/70 dark:text-primary-200/70 space-y-8">
                  <p className="text-2xl font-semibold">
                    Product Marketing Manager with 4+ years in B2B SaaS go-to-market strategy. Led 0→1 launches for two AI products, driving enterprise client acquisition and pipeline growth.
                  </p>
                  <p className="text-lg sm:text-xl">
                    Technical background (Computer Science Engineering from Osmania University + MBA in Business Analytics from Midwestern State University) enables collaboration on complex AI/ML products and translation for sales audiences.
                  </p>
                  <p className="text-lg sm:text-xl">
                    At Hoegger Communications, I lead product marketing and go-to-market strategy for two B2B SaaS AI products (SEO Alchemy, Vision Studio), partnering with Product, Engineering, and Sales teams to define requirements, influence roadmap through market intelligence, and execute launches for technical and enterprise audiences.
                  </p>
                  <p className="text-lg sm:text-xl">
                    I architect AI marketing automation for 38+ e-commerce brands, integrating content generation tools and analytics platforms. I manage campaigns and customer acquisition for 68+ FEC and entertainment brands, leveraging behavioral analytics to optimize messaging and creative strategy, achieving 79% above 2025 FEC industry YoY benchmarks.
                  </p>
                  <p className="text-lg sm:text-xl">
                    My work has been recognized with 7 American Advertising Awards in Fort Worth for excellence in performance marketing, data-driven campaign optimization, customer segmentation strategy, and creative execution across digital advertising channels.
                  </p>
                  <p className="text-lg sm:text-xl">
                    I also serve as an Adjunct Professor teaching Promotions Management at Midwestern State University, where I bring real-world marketing strategy and analytics into the classroom.
                  </p>
                  <p className="text-lg sm:text-xl">
                    Previously at Kerr Industries, I developed product positioning and content strategy for YouTube and TikTok channels across international markets, driving global customer acquisition using Excel, Tableau, SQL, and Python to analyze audience segmentation and optimize campaign targeting.
                  </p>
                  <p className="text-lg sm:text-xl">
                    Customer-obsessed approach to product marketing with focus on solving real customer problems through positioning and messaging. Proven ability to influence cross-functional stakeholders and drive results in ambiguous 0→1 launch environments.
                  </p>
                </div>
              </div>
            </div>
            <Link
              className="flex flex-col gap-10 pt-10"
              href="https://github.com/affansyed321"
            >
              {githubLoading ? (
                <div></div>
              ) : githubError ? (
                <div></div>
              ) : githubData ? (
                <GitHubContributionsGraph
                  contributions={githubData.contributions}
                  totalContributions={githubData.totalContributions}
                  restrictedContributions={githubData.restrictedContributions}
                />
              ) : null}
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}
