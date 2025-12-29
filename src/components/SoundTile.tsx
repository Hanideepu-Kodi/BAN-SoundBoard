"use client";

// src/components/SoundTile.tsx

import React from 'react';
import { playAudio } from '../lib/audioManager';

type SoundTileProps = {
  title: string;
  audioSrc: string;
};

const SoundTile: React.FC<SoundTileProps> = ({ title, audioSrc }) => {
  const handlePlay = () => {
    playAudio(audioSrc);
  };

  return (
    <div
      className="bg-neutral-800 rounded-lg p-4 flex items-center justify-center cursor-pointer hover:bg-neutral-700 transition-colors"
      onClick={handlePlay}
    >
      <h3 className="text-white text-lg font-semibold">{title}</h3>
    </div>
  );
};

export default SoundTile;
