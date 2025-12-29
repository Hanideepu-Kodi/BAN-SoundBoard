"use client";

import { useSession } from "next-auth/react";
import LoginButton from "./LoginButton";
import UserProfile from "./UserProfile";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="p-4 bg-gray-800">
      <nav className="container flex items-center justify-between mx-auto">
        <h1 className="text-xl font-bold text-white">Soundboard</h1>
        {session ? <UserProfile /> : <LoginButton />}
      </nav>
    </header>
  );
}
