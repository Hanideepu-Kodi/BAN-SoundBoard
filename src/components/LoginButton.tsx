"use client";

import { signIn } from "next-auth/react";
import React from "react";

const LoginButton = () => {
  return (
    <button
      onClick={() => signIn("google")}
      className="px-4 py-2 rounded border border-neutral-600 hover:bg-neutral-800"
    >
      Log In
    </button>
  );
};

export default LoginButton;
