// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      // TODO: Replace with your own credentials
      clientId: process.env.GOOGLE_CLIENT_ID || "YOUR_GOOGLE_CLIENT_ID",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "YOUR_GOOGLE_CLIENT_SECRET",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "YOUR_NEXTAUTH_SECRET",
});

export { handler as GET, handler as POST };
