"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import SoundGrid from './components/SoundGrid';
import PlaylistManager from './components/PlaylistManager';
import SoundUploader from './components/SoundUploader';
import { Playlist, getPlaylists, Sound, getSounds } from '@/services/api';

export default function Home() {
  const { data: session } = useSession();
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [sounds, setSounds] = useState<Sound[]>([]);

  const fetchPlaylists = () => {
    getPlaylists()
      .then(data => setPlaylists(data))
      .catch(error => console.error("Failed to fetch playlists:", error));
  };

  const fetchSounds = () => {
    getSounds()
      .then(data => setSounds(data))
      .catch(error => console.error("Failed to fetch sounds:", error));
  };

  useEffect(() => {
    if (session) {
      fetchPlaylists();
      fetchSounds();
    }
  }, [session]);

  return (
    <div>
      <section className="text-center py-20">
        {/* ... hero section ... */}
      </section>

      <SoundUploader onUploadSuccess={fetchSounds} />
      <PlaylistManager playlists={playlists} onPlaylistCreated={fetchPlaylists} />

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Hear What's Hot</h2>
        <SoundGrid sounds={sounds} playlists={playlists} />
      </section>
    </div>
  );
}
