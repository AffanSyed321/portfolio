import React, { PropsWithChildren } from 'react';
import ContrastCursor from '@/components/animations/cursor/contrastCursor';
import { clsx } from 'clsx';

type Props = {
  title: string;
  center?: boolean;
};

export default function Layout({
  children,
  title,
  center
}: PropsWithChildren<Props>) {
  return (
    <div className=" mt-36 px-8 py-16 sm:py-20">
      <h1
        className={clsx(
          'pb-14 text-4xl font-medium sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[12rem] leading-tight whitespace-nowrap',
          center ? 'items-center text-center' : ''
        )}
      >
        {title}
      </h1>
      {children} <ContrastCursor isActive={false} text={''} />
    </div>
  );
}
