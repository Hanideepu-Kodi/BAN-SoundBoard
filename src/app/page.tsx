import SoundTile from '@/components/SoundTile';

const mockSounds = [
  { title: 'Funny Meow', audioSrc: '/sample-sound.mp3' },
  { title: 'Dramatic Chipmunk', audioSrc: '/sample-sound.mp3' },
  { title: '"It\'s a Trap!"', audioSrc: '/sample-sound.mp3' },
  { title: 'Air Horn', audioSrc: '/sample-sound.mp3' },
  { title: 'Sad Trombone', audioSrc: '/sample-sound.mp3' },
  { title: 'Crickets', audioSrc: '/sample-sound.mp3' },
];

export default function Home() {
  return (
    <div>
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">The Universe of Sound, at Your Fingertips.</h1>
        <p className="text-xl text-neutral-400 mb-8">Discover, create, and share the perfect sound for any moment.</p>
        <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
          Start Creating for Free
        </button>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Hear What's Hot</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {mockSounds.map((sound) => (
            <SoundTile
              key={sound.title}
              title={sound.title}
              audioSrc={sound.audioSrc}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
