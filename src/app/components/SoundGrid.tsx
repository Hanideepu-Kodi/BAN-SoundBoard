"use client";

import React from 'react';
import SoundTile from '../../components/SoundTile'; // Note the path goes up one level from app

// Define a type for our sound data
type Sound = {
  id: number;
  title: string;
  audioSrc: string;
};

// Hardcoded list of sounds for now
const sounds: Sound[] = [
  { id: 1, title: "Funny Meow", audioSrc: "/audio/funny-meow.mp3" },
  { id: 2, title: "Dramatic Chipmunk", audioSrc: "/audio/dramatic-chipmunk.mp3" },
  { id: 3, title: "\"It's a Trap!\"", audioSrc: "/audio/its-a-trap.mp3" },
  { id: 4, title: "Air Horn", audioSrc: "/audio/air-horn.mp3" },
  { id: 5, title: "Sad Trombone", audioSrc: "/audio/sad-trombone.mp3" },
  { id: 6, title: "Crickets", audioSrc: "/audio/crickets.mp3" },
];

const SoundGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {sounds.map((sound) => (
        <SoundTile key={sound.id} title={sound.title} audioSrc={sound.audioSrc} />
      ))}
    </div>
  );
};

export default SoundGrid;
