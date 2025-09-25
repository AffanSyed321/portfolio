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
    <div className="relative overflow-hidden bg-gradient-to-b from-purple-200 via-purple-300 to-yellow-200">
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
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-semibold">My Favorite Tracks</h3>
                  <div className="flex flex-col gap-2">
                    <Link
                      href="https://www.youtube.com/watch?v=IlWlQ-NxNK0&pp=ygUaZm9yZCB2cyBmZXJyYXJpIHNvdW5kdHJhY2s%3D"
                      className="text-blue-500 hover:underline"
                      target="_blank"
                    >
                      🎵 Ford vs Ferrari Soundtrack
                    </Link>
                    <Link
                      href="https://www.youtube.com/watch?v=qDAPUfogVcY"
                      className="text-blue-500 hover:underline"
                      target="_blank"
                    >
                      🎵 Track 2
                    </Link>
                    <Link
                      href="https://www.youtube.com/watch?v=LlgWqcHXD8w&pp=ygUVc3VjY2Vzc2lvbiB0aGVtZSBzb25n"
                      className="text-blue-500 hover:underline"
                      target="_blank"
                    >
                      🎵 Succession Theme Song
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-10">
                <div className="text-primary-950/70 dark:text-primary-200/70 space-y-8">
                  <p className="text-2xl font-semibold">
                    A marketing strategist, growth marketing analyst, and AI builder with a background in Computer Science Engineering (Osmania University) and an MBA in Business Analytics (Midwestern State University).
                  </p>
                  <p className="text-lg sm:text-xl">
                    I specialize in designing AI-driven marketing systems that merge creativity, analytics, and technology to drive measurable growth.
                  </p>
                  <p className="text-lg sm:text-xl">
                    At my current company, I serve as a Growth Marketing Analyst, leading AI-powered marketing pipelines across automotive, retail, and entertainment. I've developed in-house systems including a graphic design workflow with Gemini, GPT-5, and o3 thinking, streamlining creative production, and location intelligence frameworks (Placer.ai, Experian Mosaic) that map customer segments and power offensive/defensive ad strategies.
                  </p>
                  <p className="text-lg sm:text-xl">
                    I am also the Founder of{' '}
                    <Link
                      href="https://Fewcuts.com"
                      className="font-semibold underline"
                    >
                      FewCuts Inc.
                    </Link>
                    , a context-based AI video editor startup built to help creators and brands scale campaigns by transforming long-form podcast content into intelligent short-form storytelling.
                  </p>
                  <p className="text-lg sm:text-xl">
                    My work has been recognized with 7 American Advertising Awards in Fort Worth.
                  </p>
                  <p className="text-lg sm:text-xl">
                    Beyond marketing strategy, I'm deeply obsessed with the creator economy. I built a{' '}
                    <Link
                      href="https://www.youtube.com/watch?v=Y8B3hldrjI8&list=PLjK8ekDghYRlMYGTUaokojpClBeu8R7Al&pp=gAQB"
                      className="font-semibold underline"
                    >
                      YouTube channel
                    </Link>
                    {' '}focused on creativity and creator economy and I host a podcast for the digital age — featuring global founders, creators, and thinkers like Ali Abdaal, Mehdi from ElectroBOOM, Jonathan Morrison, and more.
                  </p>
                  <p className="text-lg sm:text-xl">
                    The podcast's mission has always been to help students and young professionals unlock the "third door" in the digital age by showing how others carved unconventional paths.
                  </p>
                  <p className="text-lg sm:text-xl">
                    I also worked with creators at Kerr Industries, helping scale content strategies for names like Milad Mirg and Koi Academy, refining their audience engagement and growth funnels.
                  </p>
                  <p className="text-lg sm:text-xl">
                    Whether in marketing strategy, AI systems, or digital storytelling, my goal is the same: to combine data, design, and technology into narratives that grow businesses and empower people.
                  </p>
                </div>
              </div>
            </div>
            <Link
              className="flex flex-col gap-10 pt-10"
              href="https://github.com/affansyed"
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
