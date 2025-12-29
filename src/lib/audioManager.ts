// src/lib/audioManager.ts

/**
 * Creates a new Audio object and plays it.
 * This simple approach allows multiple sounds to be played simultaneously,
 * as each call creates a new, independent Audio instance.
 * @param audioSrc The source URL of the audio to play.
 */
export const playAudio = (audioSrc: string) => {
  const audio = new Audio(audioSrc);
  audio.play().catch(error => {
    // Autoplay was prevented.
    console.error("Audio playback error:", error);
  });
};
