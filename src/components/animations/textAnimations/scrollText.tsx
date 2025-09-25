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
      className={`letter text-6xl font-semibold xs:text-[90px] xs:leading-none md:text-[120px] lg:text-[160px] xl:text-[210px] 2xl:text-[250px] ${isKnows ? 'italic underline' : ''}`}
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
    <div ref={containerRef} className="ml-8 scroll-smooth">
      <div className="mt-16 mb-36 flex h-screen flex-col justify-end lg:mb-24">
        <div className="flex flex-wrap p-0">
          <LetterDisplay word={word1} />
          <div className="w-2 xs:w-4 sm:w-6"></div>
          <LetterDisplay word={word2} />
        </div>
        <div className="flex flex-wrap">
          <LetterDisplay word={word3} isKnows={true} />
        </div>
        <div className="flex flex-wrap">
          <LetterDisplay word={word4} />
          <div className="w-2 xs:w-4 sm:w-6"></div>
          <LetterDisplay word={word5} />
          <div className="w-2 xs:w-4 sm:w-6"></div>
          <LetterDisplay word={word6} />
        </div>
        <div className="flex flex-wrap">
          <LetterDisplay word={word7} />
          <div className="w-2 xs:w-4 sm:w-6"></div>
          <LetterDisplay word={word8} />
        </div>
      </div>
      <div className="flex flex-wrap">
        <LetterDisplay word={sentence3} />
      </div>
    </div>
  );
}
