import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soundwave",
  description: "The Universe of Sound, at Your Fingertips.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-900 text-neutral-100`}>
        <div className="flex flex-col min-h-screen">
          <header className="py-4">
            <div className="container mx-auto px-6 flex justify-between items-center">
              <div className="text-2xl font-bold">Soundwave</div>
              <nav>
                <a href="#" className="px-4 hover:text-neutral-300">Explore</a>
                <a href="#" className="px-4 hover:text-neutral-300">About</a>
                <a href="#" className="px-4 py-2 rounded border border-neutral-600 hover:bg-neutral-800">Log In</a>
                <a href="#" className="px-4 py-2 rounded bg-blue-600 text-white ml-2 hover:bg-blue-700">Sign Up</a>
              </nav>
            </div>
          </header>
          <main className="flex-grow container mx-auto px-6 py-8">
            {children}
          </main>
          <footer className="py-4 mt-8 border-t border-neutral-800">
            <div className="container mx-auto px-6 text-center text-neutral-400">
              &copy; {new Date().getFullYear()} Soundwave. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
