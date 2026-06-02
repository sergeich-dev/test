import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { upsertGoogleUser } from "@/db/queries/users";

export const { auth, handlers, signIn, signOut } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider !== "google" || !user.email) {
        return false;
      }

      const savedUser = await upsertGoogleUser({
        email: user.email,
        name: user.name,
        image: user.image,
        googleId:
          typeof account.providerAccountId === "string"
            ? account.providerAccountId
            : typeof profile?.sub === "string"
              ? profile.sub
              : null,
      });

      user.id = savedUser.id;

      return true;
    },
    async jwt({ token, profile, user }) {
      if (user?.id) {
        token.sub = user.id;
      }

      if (profile?.picture && typeof profile.picture === "string") {
        token.picture = profile.picture;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user && typeof token.picture === "string") {
        session.user.image = token.picture;
      }

      if (session.user && typeof token.sub === "string") {
        session.user.id = token.sub;
      }

      return session;
    },
  },
});
