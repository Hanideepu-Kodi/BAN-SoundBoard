"use client";

import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { uploadSound } from '@/services/api';

interface SoundUploaderProps {
  onUploadSuccess: () => void;
}

const SoundUploader: React.FC<SoundUploaderProps> = ({ onUploadSuccess }) => {
  const { data: session } = useSession();
  const [name, setName] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !name) {
      return;
    }
    try {
      await uploadSound(name, file);
      setName('');
      setFile(null);
      onUploadSuccess(); // Call the callback to refresh the sound list
    } catch (error) {
      console.error("Failed to upload sound:", error);
    }
  };

  if (!session) {
    return null;
  }

  return (
    <section className="py-8">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4">Upload a New Sound</h2>
        <form onSubmit={handleSubmit} className="bg-neutral-800 p-6 rounded-lg">
          <div className="mb-4">
            <label htmlFor="soundName" className="block text-white mb-2">Sound Name</label>
            <input
              type="text"
              id="soundName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 bg-neutral-700 border border-neutral-600 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="soundFile" className="block text-white mb-2">Sound File</label>
            <input
              type="file"
              id="soundFile"
              onChange={handleFileChange}
              className="w-full"
              accept="audio/*"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700"
          >
            Upload
          </button>
        </form>
      </div>
    </section>
  );
};

export default SoundUploader;
