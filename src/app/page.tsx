"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import SoundGrid from './components/SoundGrid';
import PlaylistManager from './components/PlaylistManager';
import { Playlist, getPlaylists } from '@/services/api';

export default function Home() {
  const { data: session } = useSession();
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

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

  return (
    <div>
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">The Universe of Sound, at Your Fingertips.</h1>
        <p className="text-xl text-neutral-400 mb-8">Discover, create, and share the perfect sound for any moment.</p>
        <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
          Start Creating for Free
        </button>
      </section>

      <PlaylistManager playlists={playlists} onPlaylistCreated={fetchPlaylists} />

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Hear What's Hot</h2>
        <SoundGrid playlists={playlists} />
      </section>
    </div>
  );
}
