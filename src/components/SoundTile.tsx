"use client";

import React, { useState } from 'react';
import { playAudio } from '../lib/audioManager';
import { Sound, Playlist, addSoundToPlaylist } from '@/services/api';

type SoundTileProps = {
  sound: Sound;
  playlists: Playlist[];
};

const SoundTile: React.FC<SoundTileProps> = ({ sound, playlists }) => {
  const [showPlaylists, setShowPlaylists] = useState(false);

  const handlePlay = () => {
    playAudio(sound.url);
  };

  const handleAddToPlaylist = (playlistId: number) => {
    addSoundToPlaylist(playlistId, sound.id)
      .then(() => {
        // Here you might want to show a success message
        setShowPlaylists(false);
      })
      .catch(error => {
        console.error("Failed to add sound to playlist:", error);
        // Here you might want to show an error message
      });
  };

  return (
    <div className="bg-neutral-800 rounded-lg p-4 flex flex-col items-center justify-center relative">
      <div onClick={handlePlay} className="cursor-pointer">
        <h3 className="text-white text-lg font-semibold">{sound.name}</h3>
      </div>
      <div className="absolute bottom-2 right-2">
        <button
          onClick={() => setShowPlaylists(!showPlaylists)}
          className="bg-gray-700 text-white text-xs px-2 py-1 rounded hover:bg-gray-600"
        >
          +
        </button>
        {showPlaylists && (
          <div className="absolute bottom-8 right-0 bg-gray-900 border border-gray-700 rounded-md shadow-lg z-10">
            {playlists.length > 0 ? (
              playlists.map(playlist => (
                <div
                  key={playlist.id}
                  onClick={() => handleAddToPlaylist(playlist.id)}
                  className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                >
                  {playlist.name}
                </div>
              ))
            ) : (
              <div className="px-4 py-2 text-gray-400">No playlists</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SoundTile;
