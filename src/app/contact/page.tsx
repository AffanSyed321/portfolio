import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Affan Syed | Get in Touch',
  description: 'Contact Affan Syed for growth marketing consulting, AI-driven marketing solutions, or collaboration opportunities. Available for marketing strategy, performance marketing, and AI system development projects.',
  keywords: ['Contact Affan Syed', 'Marketing Consulting', 'AI Marketing Consultant', 'Growth Marketing Services', 'Performance Marketing Expert', 'Get in Touch'],
  openGraph: {
    title: 'Contact Affan Syed | Get in Touch',
    description: 'Contact Affan Syed for growth marketing consulting and AI-driven marketing solutions.',
    url: 'https://affansyed.com/contact',
  },
  twitter: {
    title: 'Contact Affan Syed | Get in Touch',
    description: 'Contact Affan Syed for growth marketing consulting and AI-driven marketing solutions.',
  },
};

'use client';

import TextDisperse from '@/app/contact/textDisperse/textDisperse';
import { clsx } from 'clsx';
import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { ContactForm } from '@/app/contact/contactForm';
import { useToast } from '@/components/ui/use-toast';

export default function Contact() {
  const background = useRef(null);
  const emailRef = useRef(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const { toast } = useToast();

  const setBackground = (isActive: any) => {
    gsap.to(background.current, { opacity: isActive ? 0.7 : 0 });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('Affansyed7@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const scrollToEmail = () => {
    const emailSection = document.getElementById('email');
    copyEmail();
    if (emailSection) {
      emailSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="-mt-20 bg-foreground text-white ">
      <div className="flex min-h-screen w-full items-center justify-center pt-44 align-middle text-[8.6vw] xs:text-[5.6vw]">
        <div className="p-12 xs:w-1/2 xs:p-0">
          <div className="flex justify-between uppercase">
            <p className="m-0">Affan</p>
            <p className="m-0">Syed</p>
          </div>
          <div className="flex justify-between uppercase">
            <p className="m-0">Engineer</p>
            <p className="m-0"></p>
          </div>
          <div className="flex justify-between uppercase">
            <p className="m-0"></p>
            <p className="m-0">Founder</p>
          </div>
          <div className="flex justify-between uppercase">
            <p className="m-0"></p>
            <Link href={'https://www.linkedin.com/in/affan-syed-mahmood-hussain-0577a6169/'}>
              <TextDisperse setBackground={setBackground}>
                <p>→Linkedin</p>
              </TextDisperse>
            </Link>
          </div>
          <div className="flex justify-between uppercase">
            <TextDisperse
              setBackground={setBackground}
              onClick={() => {
                toast({
                  description:
                    'Email copied to clipboard, alternatively write your enquiry on the form!'
                });
                scrollToEmail();
              }}
            >
              <p className="m-0">→Email</p>
            </TextDisperse>

            <Link href={'https://x.com/Affansyed321'}>
              <TextDisperse setBackground={setBackground}>
                <p>→Twitter</p>
              </TextDisperse>
            </Link>
          </div>
          <div className="flex justify-between uppercase">
            <p className="m-0"></p>
            <Link href={'https://www.youtube.com/@AffanSyedx'}>
              <TextDisperse setBackground={setBackground}>
                <p>→Youtube</p>
              </TextDisperse>
            </Link>
          </div>
          <div
            ref={background}
            className={clsx(
              'pointer-events-none absolute inset-0 h-full w-full bg-foreground text-[5.6vw] opacity-0'
            )}
          ></div>
        </div>
      </div>
      <div className="px-12 sm:px-56" id="email" ref={emailRef}>
        <ContactForm />
      </div>
    </div>
  );
}
