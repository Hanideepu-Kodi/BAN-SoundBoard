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
      <body className={`${inter.className} bg-gray-100 text-gray-900`}>
        <div className="flex flex-col min-h-screen">
          <header className="bg-white shadow-md">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
              <div className="text-2xl font-bold text-blue-600">Soundwave</div>
              <div>
                <a href="#" className="px-4">Explore</a>
                <a href="#" className="px-4">About</a>
                <a href="#" className="px-4 py-2 rounded bg-gray-200 text-gray-800">Log In</a>
                <a href="#" className="px-4 py-2 rounded bg-blue-600 text-white ml-2">Sign Up</a>
              </div>
            </nav>
          </header>
          <main className="flex-grow container mx-auto px-6 py-8">
            {children}
          </main>
          <footer className="bg-white mt-8 py-4">
            <div className="container mx-auto px-6 text-center text-gray-600">
              &copy; {new Date().getFullYear()} Soundwave. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
