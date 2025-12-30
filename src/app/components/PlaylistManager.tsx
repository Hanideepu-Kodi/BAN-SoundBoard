"use client";

import { useSession } from "next-auth/react";
import React, { useState } from 'react';
import { createPlaylist, Playlist, PlaylistCreate } from '@/services/api';

interface PlaylistManagerProps {
  playlists: Playlist[];
  onPlaylistCreated: () => void;
}

const PlaylistManager: React.FC<PlaylistManagerProps> = ({ playlists, onPlaylistCreated }) => {
  const { data: session } = useSession();
  const [isCreating, setIsCreating] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const [newPlaylistDescription, setNewPlaylistDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const playlistData: PlaylistCreate = {
      name: newPlaylistName,
      description: newPlaylistDescription,
    };
    try {
      await createPlaylist(playlistData);
      setNewPlaylistName("");
      setNewPlaylistDescription("");
      setIsCreating(false);
      onPlaylistCreated(); // Callback to refresh playlists in the parent
    } catch (error) {
      console.error("Failed to create playlist:", error);
    }
  };

  if (!session) {
    return null;
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Your Playlists</h2>
          {!isCreating && (
            <button
              onClick={() => setIsCreating(true)}
              className="bg-green-600 text-white font-bold py-2 px-6 rounded-full hover:bg-green-700 transition-transform transform hover:scale-105"
            >
              Create New Playlist
            </button>
          )}
        </div>
        <div>
          {isCreating ? (
            <form onSubmit={handleSubmit} className="mb-6">
              {/* Form inputs... */}
            </form>
          ) : null}
          {playlists.length > 0 ? (
            <ul>
              {playlists.map(playlist => (
                <li key={playlist.id} className="border-b border-neutral-800 py-2">
                  <h3 className="text-xl font-semibold">{playlist.name}</h3>
                  <p className="text-neutral-400">{playlist.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-neutral-400">You don't have any playlists yet. Create one to get started!</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PlaylistManager;
