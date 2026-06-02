import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

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
    async jwt({ token, profile }) {
      if (profile?.picture && typeof profile.picture === "string") {
        token.picture = profile.picture;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user && typeof token.picture === "string") {
        session.user.image = token.picture;
      }

      return session;
    },
  },
});
