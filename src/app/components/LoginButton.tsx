"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <button
        onClick={() => signOut()}
        className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Sign Out
      </button>
    );
  }
  return (
    <button
      onClick={() => signIn("google")}
      className="px-4 py-2 font-semibold text-white bg-green-500 rounded hover:bg-green-700"
    >
      Log In
    </button>
  );
}
