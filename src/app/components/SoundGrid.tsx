"use client";

import React from 'react';
import SoundTile from '../../components/SoundTile';
import { Sound, Playlist } from '@/services/api';

interface SoundGridProps {
  sounds: Sound[];
  playlists: Playlist[];
}

const SoundGrid: React.FC<SoundGridProps> = ({ sounds, playlists }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {sounds.map((sound) => (
        <SoundTile key={sound.id} sound={sound} playlists={playlists} />
      ))}
    </div>
  );
};

export default SoundGrid;
