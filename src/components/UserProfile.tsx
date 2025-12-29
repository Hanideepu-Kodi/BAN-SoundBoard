"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";

const UserProfile = () => {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  return (
    <div className="flex items-center space-x-4">
      <Image
        src={session.user?.image || "/default-avatar.png"}
        alt={session.user?.name || "User"}
        width={32}
        height={32}
        className="rounded-full"
      />
      <span>{session.user?.name}</span>
      <button
        onClick={() => signOut()}
        className="px-4 py-2 rounded bg-blue-600 text-white ml-2 hover:bg-blue-700"
      >
        Sign Out
      </button>
    </div>
  );
};

export default UserProfile;
