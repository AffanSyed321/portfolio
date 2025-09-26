'use client';
import React, { useEffect, useRef, useState } from 'react';
import Layout from '@/components/layout';

// Extract video ID from YouTube URL
const getYouTubeVideoId = (url: string): string => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&\n?#]+)/);
  return match ? match[1] : '';
};

// Video data
const podcastEpisodes = [
  {
    id: 1,
    title: '',
    youtubeUrl: 'https://youtu.be/_nTBa6Pb3U0?feature=shared',
    videoId: getYouTubeVideoId('https://youtu.be/_nTBa6Pb3U0?feature=shared'),
  },
  {
    id: 2,
    title: '',
    youtubeUrl: 'https://youtu.be/2Z26pS9JJas?feature=shared',
    videoId: getYouTubeVideoId('https://youtu.be/2Z26pS9JJas?feature=shared'),
  },
  {
    id: 3,
    title: '',
    youtubeUrl: 'https://youtu.be/XzG8JCHbqCE?feature=shared',
    videoId: getYouTubeVideoId('https://youtu.be/XzG8JCHbqCE?feature=shared'),
  },
  {
    id: 4,
    title: '',
    youtubeUrl: 'https://youtu.be/zG3iqCn-SjE?feature=shared',
    videoId: getYouTubeVideoId('https://youtu.be/zG3iqCn-SjE?feature=shared'),
  },
  {
    id: 5,
    title: '',
    youtubeUrl: 'https://youtu.be/rQTqjU71H70?feature=shared',
    videoId: getYouTubeVideoId('https://youtu.be/rQTqjU71H70?feature=shared'),
  },
  {
    id: 6,
    title: '',
    youtubeUrl: 'https://youtu.be/w9Zl3L6G6yI?feature=shared',
    videoId: getYouTubeVideoId('https://youtu.be/w9Zl3L6G6yI?feature=shared'),
  },
  {
    id: 7,
    title: '',
    youtubeUrl: 'https://youtu.be/WSJY7OlAkgA?feature=shared',
    videoId: getYouTubeVideoId('https://youtu.be/WSJY7OlAkgA?feature=shared'),
  },
  {
    id: 8,
    title: '',
    youtubeUrl: 'https://youtu.be/CyNk6IcSg-E?feature=shared',
    videoId: getYouTubeVideoId('https://youtu.be/CyNk6IcSg-E?feature=shared'),
  },
  {
    id: 9,
    title: '',
    youtubeUrl: 'https://youtu.be/VorJ5QyghR8?feature=shared',
    videoId: getYouTubeVideoId('https://youtu.be/VorJ5QyghR8?feature=shared'),
  },
  {
    id: 10,
    title: '',
    youtubeUrl: 'https://youtu.be/FHOvQy8wj9A?feature=shared',
    videoId: getYouTubeVideoId('https://youtu.be/FHOvQy8wj9A?feature=shared'),
  },
  {
    id: 11,
    title: '',
    youtubeUrl: 'https://youtu.be/Y8B3hldrjI8?feature=shared',
    videoId: getYouTubeVideoId('https://youtu.be/Y8B3hldrjI8?feature=shared'),
  },
];

interface VideoPlayerProps {
  videoId: string;
  title: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, title }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (isHovered && !showPlayer) {
      const timer = setTimeout(() => {
        setShowPlayer(true);
      }, 500); // Delay before showing player

      return () => clearTimeout(timer);
    } else if (!isHovered && showPlayer) {
      const timer = setTimeout(() => {
        setShowPlayer(false);
      }, 300); // Delay before hiding player

      return () => clearTimeout(timer);
    }
  }, [isHovered, showPlayer]);

  return (
    <div
      className="group relative overflow-hidden rounded-lg bg-black shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video w-full">
        {!showPlayer ? (
          // Thumbnail
          <div className="flex h-full w-full items-center justify-center bg-gray-900">
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt={title}
              className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
              onError={(e) => {
                // Fallback to medium quality thumbnail if maxres doesn't exist
                const target = e.target as HTMLImageElement;
                target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full bg-red-600 p-4 transition-transform duration-300 group-hover:scale-110">
                <svg
                  className="h-8 w-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          // YouTube Player
          <iframe
            ref={iframeRef}
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>

      {title && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
      )}
    </div>
  );
};

export default function PodcastEpisodes() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 px-2 py-4 sm:px-4 sm:py-8 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {podcastEpisodes.map((episode) => (
            <VideoPlayer
              key={episode.id}
              videoId={episode.videoId}
              title={episode.title}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}