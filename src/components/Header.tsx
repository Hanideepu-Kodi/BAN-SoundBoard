"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import LoginButton from "./LoginButton";
import UserProfile from "./UserProfile";

const Header = () => {
  const { data: session, status } = useSession();

  return (
    <header className="py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Soundwave
        </Link>
        <nav className="flex items-center">
          <Link href="/explore" className="px-4 hover:text-neutral-300">
            Explore
          </Link>
          <Link href="/about" className="px-4 hover:text-neutral-300">
            About
          </Link>
          {status === "loading" ? (
            <div className="w-24 h-8 bg-neutral-800 rounded animate-pulse" />
          ) : session ? (
            <UserProfile />
          ) : (
            <>
              <LoginButton />
              <Link
                href="/signup"
                className="px-4 py-2 rounded bg-blue-600 text-white ml-2 hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
