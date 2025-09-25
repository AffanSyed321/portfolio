'use client';
import React, { useContext } from 'react';
import { ModalContext } from '@/app/projects/modalContext';

interface Props {
  index: number;
  title: string;
  tag: string;
  company?: string;
  location?: string;
  duration?: string;
  clickable?: boolean;
}

export default function ProjectLink({ index, title, tag, company, location, duration, clickable }: Props) {
  return (
    <div className={`align-center flex w-full justify-between border-b border-b-gray-600 px-5 py-8 md:py-12 lg:py-16 ${clickable ? 'cursor-pointer hover:bg-gray-800/20 transition-colors' : ''}`}>
      <div className="flex flex-col gap-1 md:gap-2">
        <h2 className="m-0 text-base font-normal text-black sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl leading-tight">
          {title}
        </h2>
        {company && (
          <p className="m-0 text-sm font-normal text-gray-400 sm:text-base md:text-base lg:text-lg leading-snug">
            {company}
          </p>
        )}
        {location && duration && (
          <p className="m-0 text-xs font-light text-gray-500 sm:text-xs md:text-sm lg:text-sm leading-relaxed">
            {location} • {duration}
          </p>
        )}
      </div>
      <div className="flex items-center gap-2">
        <p className="text-sm font-light">
          {tag}
        </p>
        {clickable && (
          <span className="text-xs text-gray-500">
            ▼
          </span>
        )}
      </div>
    </div>
  );
}
