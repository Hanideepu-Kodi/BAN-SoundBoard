const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

// Define a type for the playlist data
export interface Playlist {
  id: number;
  name: string;
  description: string | null;
  owner_id: number;
}

// Define a type for the data needed to create a playlist
export interface PlaylistCreate {
  name: string;
  description?: string;
}

/**
 * Fetches all playlists from the backend.
 * @returns A promise that resolves to an array of playlists.
 */
export const getPlaylists = async (): Promise<Playlist[]> => {
  const response = await fetch(`${API_BASE_URL}/playlists/`);
  if (!response.ok) {
    throw new Error('Failed to fetch playlists');
  }
  return response.json();
};

/**
 * Creates a new playlist.
 * @param playlistData The data for the new playlist.
 * @returns A promise that resolves to the newly created playlist.
 */
export const createPlaylist = async (playlistData: PlaylistCreate): Promise<Playlist> => {
  const response = await fetch(`${API_BASE_URL}/playlists/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(playlistData),
  });
  if (!response.ok) {
    throw new Error('Failed to create playlist');
  }
  return response.json();
};
