import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "./components/AuthProvider";
import Header from "./components/Header";
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
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-6 py-8">
              {children}
            </main>
            <footer className="py-4 mt-8 border-t border-neutral-800">
              <div className="container mx-auto px-6 text-center text-neutral-400">
                &copy; {new Date().getFullYear()} Soundwave. All rights reserved.
              </div>
            </footer>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
