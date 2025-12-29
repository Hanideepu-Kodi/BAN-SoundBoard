"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function UserProfile() {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  return (
    <div className="flex items-center space-x-4">
      <p className="text-white">Welcome, {session.user?.name}</p>
      {session.user?.image && (
        <Image
          src={session.user.image}
          alt={session.user.name ?? "User profile picture"}
          width={32}
          height={32}
          className="rounded-full"
        />
      )}
    </div>
  );
}
