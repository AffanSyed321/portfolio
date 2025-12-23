import React from 'react';
import Image from 'next/image';

interface SpotifyPlaylist {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  trackCount: number;
  firstTrack: string;
  firstTrackArtist: string;
  url: string;
}

interface SpotifyPlaylistsProps {
  playlists: SpotifyPlaylist[];
}

const SpotifyPlaylists: React.FC<SpotifyPlaylistsProps> = ({ playlists }) => {
  return (
    <div className="rounded-2xl bg-purple-900 p-4 text-white shadow-lg">
      <h3 className="mb-3 text-lg font-bold">
        My Playlist
      </h3>
      <div className="flex flex-col gap-3">
        {playlists.map((playlist) => (
          <a
            key={playlist.id}
            href={playlist.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 rounded-md transition-all duration-300 hover:bg-purple-800 p-2"
          >
            <div className="relative h-20 w-20 flex-shrink-0">
              <Image
                src={playlist.imageUrl || '/placeholder-playlist.png'}
                alt={`${playlist.name} cover`}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <h4 className="truncate text-sm font-semibold">
                {playlist.name}
              </h4>
              <p className="text-xs text-gray-400">
                {playlist.trackCount} tracks
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SpotifyPlaylists;
