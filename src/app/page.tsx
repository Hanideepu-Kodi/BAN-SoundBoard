export default function Home() {
  return (
    <div>
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">The Universe of Sound, at Your Fingertips.</h1>
        <p className="text-xl text-gray-700 mb-8">Discover, create, and share the perfect sound for any moment.</p>
        <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition duration-300">
          Start Creating for Free
        </button>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Hear What's Hot</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {/* Placeholder Sound Tiles */}
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
            <p className="font-semibold">Funny Meow</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
            <p className="font-semibold">Dramatic Chipmunk</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
            <p className="font-semibold">"It's a Trap!"</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
            <p className="font-semibold">Air Horn</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
            <p className="font-semibold">Sad Trombone</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
            <p className="font-semibold">Crickets</p>
          </div>
        </div>
      </section>
    </div>
  );
}
