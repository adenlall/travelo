import type { NextAuthConfig } from 'next-auth/lib/index';
import GitHub from "next-auth/providers/github";

// import { siteConfig } from "@/config/site"
// import { getUserByEmail } from "@/lib/user";
// import MagicLinkEmail from "@/emails/magic-link-email"
// import { prisma } from "@/lib/db"

export default {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    })
  ],
} satisfies NextAuthConfig;