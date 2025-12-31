const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export interface Sound {
  id: number;
  name: string;
  url: string;
  owner_id: number;
}

export interface Playlist {
  id: number;
  name: string;
  description: string | null;
  owner_id: number;
  sounds: Sound[];
}

export interface PlaylistCreate {
  name: string;
  description?: string;
}

export const getPlaylists = async (): Promise<Playlist[]> => {
  const response = await fetch(`${API_BASE_URL}/playlists/`);
  if (!response.ok) {
    throw new Error('Failed to fetch playlists');
  }
  return response.json();
};

export const createPlaylist = async (playlistData: PlaylistCreate): Promise<Playlist> => {
  const response = await fetch(`${API_BASE_URL}/playlists/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(playlistData),
  });
  if (!response.ok) {
    throw new Error('Failed to create playlist');
  }
  return response.json();
};

export const getSounds = async (): Promise<Sound[]> => {
    const response = await fetch(`${API_BASE_URL}/sounds/`);
    if (!response.ok) {
        throw new Error('Failed to fetch sounds');
    }
    return response.json();
};

export const addSoundToPlaylist = async (playlistId: number, soundId: number): Promise<Playlist> => {
    const response = await fetch(`${API_BASE_URL}/playlists/${playlistId}/sounds/${soundId}`, {
        method: 'POST',
    });
    if (!response.ok) {
        throw new Error('Failed to add sound to playlist');
    }
    return response.json();
};

export const uploadSound = async (name: string, file: File): Promise<Sound> => {
  const formData = new FormData();
  formData.append('name', name);
  formData.append('file', file);

  const response = await fetch(`${API_BASE_URL}/sounds/upload`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to upload sound');
  }
  return response.json();
};
