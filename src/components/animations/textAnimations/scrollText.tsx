import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MutableRefObject, useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const word1 = 'Engineer ';
const word2 = 'who ';
const word3 = 'knows ';
const word4 = 'how ';
const word5 = 'to ';
const word6 = 'market ';
const word7 = 'stuff ';
const word8 = 'well';
const sentence3 = 'turning ideas into profitable ventures';

function getRandomSpeed() {
  const randomDecimal = Math.random();
  return 0.8 + randomDecimal * (1.5 - 0.8); // Increased speed range
}
function getRandomRotation() {
  return Math.random() * 60 - 30; // Random rotation between -30 and 30 degrees
}

const animateLettersOnScroll = (containerRef: MutableRefObject<any>) => {
  const lettersContainer = containerRef.current;
  const letterElements = lettersContainer?.querySelectorAll('.letter');

  letterElements.forEach((letter: Element, index: number) => {
    gsap.to(letter, {
      y: (i, el) =>
        (1 - parseFloat(el.getAttribute('data-speed'))) *
        ScrollTrigger.maxScroll(window),
      ease: 'power2.out',
      duration: 0.8,
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        invalidateOnRefresh: true,
        scrub: 0.5
      },
      rotation: getRandomRotation()
    });
  });
};

function LetterDisplay({ word, isKnows = false }: { word: string, isKnows?: boolean }) {
  return word.split('').map((letter, index) => (
    <div
      key={index}
      className={`letter text-2xl font-semibold leading-tight xs:text-4xl sm:text-[70px] sm:leading-[0.85] md:text-[90px] md:leading-[0.8] lg:text-[120px] lg:leading-[0.75] xl:text-[150px] xl:leading-[0.7] 2xl:text-[180px] 2xl:leading-[0.65] ${isKnows ? 'italic underline' : ''}`}
      data-speed={getRandomSpeed()}
    >
      {letter}
    </div>
  ));
}

export function LetterCollision() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    animateLettersOnScroll(containerRef);
  }, []);

  return (
    <div ref={containerRef} className="ml-4 sm:ml-8 scroll-smooth">
      <div className="mt-8 mb-16 flex h-screen flex-col justify-center sm:justify-end sm:mt-16 sm:mb-36 lg:mb-24">
        {/* Mobile: Engineer who */}
        <div className="flex flex-nowrap p-0 sm:hidden">
          <LetterDisplay word={word1} />
          <div className="w-2"></div>
          <LetterDisplay word={word2} />
        </div>
        {/* Mobile: knows */}
        <div className="flex flex-nowrap sm:hidden">
          <LetterDisplay word={word3} isKnows={true} />
        </div>
        {/* Mobile: how to market */}
        <div className="flex flex-nowrap sm:hidden">
          <LetterDisplay word={word4} />
          <div className="w-2"></div>
          <LetterDisplay word={word5} />
          <div className="w-2"></div>
          <LetterDisplay word={word6} />
        </div>
        {/* Mobile: stuff well */}
        <div className="flex flex-nowrap sm:hidden">
          <LetterDisplay word={word7} />
          <div className="w-2"></div>
          <LetterDisplay word={word8} />
        </div>

        {/* Desktop: Original layout */}
        <div className="hidden sm:flex flex-wrap p-0 mb-2 lg:mb-4">
          <LetterDisplay word={word1} />
          <div className="w-3 sm:w-4 md:w-6 lg:w-8"></div>
          <LetterDisplay word={word2} />
        </div>
        <div className="hidden sm:flex flex-wrap mb-2 lg:mb-4">
          <LetterDisplay word={word3} isKnows={true} />
        </div>
        <div className="hidden sm:flex flex-wrap mb-2 lg:mb-4">
          <LetterDisplay word={word4} />
          <div className="w-3 sm:w-4 md:w-6 lg:w-8"></div>
          <LetterDisplay word={word5} />
          <div className="w-3 sm:w-4 md:w-6 lg:w-8"></div>
          <LetterDisplay word={word6} />
        </div>
        <div className="hidden sm:flex flex-wrap mb-4 lg:mb-8">
          <LetterDisplay word={word7} />
          <div className="w-3 sm:w-4 md:w-6 lg:w-8"></div>
          <LetterDisplay word={word8} />
        </div>
      </div>
      <div className="flex flex-wrap mb-8 sm:mb-0">
        <LetterDisplay word={sentence3} />
      </div>
    </div>
  );
}
