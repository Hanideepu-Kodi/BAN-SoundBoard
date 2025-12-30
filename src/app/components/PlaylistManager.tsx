"use client";

import { useSession } from "next-auth/react";
import React, { useState, useEffect } from 'react';
import { getPlaylists, createPlaylist, Playlist, PlaylistCreate } from '@/services/api';

const PlaylistManager = () => {
  const { data: session } = useSession();
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const [newPlaylistDescription, setNewPlaylistDescription] = useState("");

  const fetchPlaylists = () => {
    getPlaylists()
      .then(data => setPlaylists(data))
      .catch(error => console.error("Failed to fetch playlists:", error));
  };

  useEffect(() => {
    if (session) {
      fetchPlaylists();
    }
  }, [session]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const playlistData: PlaylistCreate = {
      name: newPlaylistName,
      description: newPlaylistDescription,
    };
    try {
      await createPlaylist(playlistData);
      // Reset form and hide it
      setNewPlaylistName("");
      setNewPlaylistDescription("");
      setIsCreating(false);
      // Refresh the list of playlists
      fetchPlaylists();
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
              <input
                type="text"
                value={newPlaylistName}
                onChange={(e) => setNewPlaylistName(e.target.value)}
                placeholder="Playlist Name"
                className="w-full p-2 mb-2 bg-neutral-800 border border-neutral-700 rounded"
                required
              />
              <textarea
                value={newPlaylistDescription}
                onChange={(e) => setNewPlaylistDescription(e.target.value)}
                placeholder="Playlist Description"
                className="w-full p-2 mb-2 bg-neutral-800 border border-neutral-700 rounded"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Save Playlist
              </button>
              <button
                type="button"
                onClick={() => setIsCreating(false)}
                className="ml-2 text-neutral-400 hover:text-white"
              >
                Cancel
              </button>
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
