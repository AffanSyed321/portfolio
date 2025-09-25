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
    <div className={`align-center flex w-full justify-between border-b border-b-gray-600 px-5 py-10 ${clickable ? 'cursor-pointer hover:bg-gray-800/20 transition-colors' : ''}`}>
      <div className="flex flex-col">
        <h2 className="m-0 text-xl font-normal text-black lg:text-6xl">
          {title}
        </h2>
        {company && (
          <p className="m-0 text-lg font-normal text-gray-400 lg:text-2xl">
            {company}
          </p>
        )}
        {location && duration && (
          <p className="m-0 text-sm font-light text-gray-500 lg:text-lg">
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
