"use client";

import React, { useState, useEffect } from 'react';
import SoundTile from '../../components/SoundTile';
import { getSounds, Sound, Playlist } from '@/services/api';

interface SoundGridProps {
  playlists: Playlist[];
}

const SoundGrid: React.FC<SoundGridProps> = ({ playlists }) => {
  const [sounds, setSounds] = useState<Sound[]>([]);

  useEffect(() => {
    getSounds()
      .then(data => setSounds(data))
      .catch(error => console.error("Failed to fetch sounds:", error));
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {sounds.map((sound) => (
        <SoundTile key={sound.id} sound={sound} playlists={playlists} />
      ))}
    </div>
  );
};

export default SoundGrid;
