import React from 'react';

export default function Hero() {
  return (
    <div className="relative flex min-h-screen w-full items-center bg-foreground align-middle">
      <video
        className="pointer-events-none h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/hero-video.mov" type="video/quicktime" />
        <source src="/hero-video.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
