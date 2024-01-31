import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { signIn } from "@/services/firebase_auth";

const authOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXT_AUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "credentials",
      credentials: {
        npm: { label: "npm", type: "npm" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { npm, password } = credentials;
        const user = await signIn(npm);
        if (user) {
          const passwordConf = await compare(password, user.password);
          if (passwordConf) {
            return user;
          }
          return null;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile, user }) {
      if (account?.provider === "credentials") {
        token.name = user.name;
        token.npm = user.npm;
        token.role = user.role;
      }

      return token;
    },

    async session({ session, token }) {
      if ("name" in token) {
        session.user.name = token.name;
      }
      if ("npm" in token) {
        session.user.npm = token.npm;
      }
      if ("role" in token) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};

export default NextAuth(authOptions);
