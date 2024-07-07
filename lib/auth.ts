import { PrismaAdapter } from "@auth/prisma-adapter";
import { Role as UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";
import prisma from "./prisma";

import type { NextAuthConfig } from 'next-auth/lib/index';

import authConfig from "../auth.config";
import { log } from "../utils";

// More info: https://authjs.dev/getting-started/typescript#module-augmentation
declare module "next-auth" {
  interface Session {
    user: {
      role: UserRole;
    } & DefaultSession["user"];
  }
}

export const conf = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  callbacks: {
    async session({ token, session }: {
      token: any,
      session: any
    }) {
      log(token, session);
      if (session.user) {
        if (token.sub) {
          session.user.id = token.sub;
        }

        if (token.email) {
          session.user.email = token.email;
        }

        if (token.role) {
          session.user.role = token.role;
        }

        session.user.name = token.name;
        session.user.image = token.picture;
      }

      return session;
    },

    async jwt({ token }: any) {
      log(token);
      if (!token.sub) return token;
      const dbUser = await prisma.user.findUnique({
        where: {
          id: token.sub
        }
      });
      if (!dbUser) return token;
      
      log(dbUser);

      token.name = dbUser.name;
      token.email = dbUser.email;
      token.picture = dbUser.image;
      token.role = dbUser.role;

      return token;
    },
  },
  ...authConfig,
  debug: process.env.NODE_ENV !== "production"
} as NextAuthConfig | any;


export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth(conf);
