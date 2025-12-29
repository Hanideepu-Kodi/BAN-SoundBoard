"use client";

import { useSession } from "next-auth/react";
import React from 'react';

const PlaylistManager = () => {
  const { data: session } = useSession();

  // If the user is not logged in, render nothing
  if (!session) {
    return null;
  }

  // If the user is logged in, show the playlist management UI
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Your Playlists</h2>
          <button className="bg-green-600 text-white font-bold py-2 px-6 rounded-full hover:bg-green-700 transition-transform transform hover:scale-105">
            Create New Playlist
          </button>
        </div>
        <div>
          {/* Placeholder for the list of playlists */}
          <p className="text-neutral-400">You don't have any playlists yet. Create one to get started!</p>
        </div>
      </div>
    </section>
  );
};

export default PlaylistManager;
