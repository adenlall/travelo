import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";

const prisma = new PrismaClient()

const handler = NextAuth({
    adapter: PrismaAdapter(prisma) as any,
    providers: [
        Credentials({
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials) => {
                const res = await fetch("/your/endpoint", {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })
                const user = await res.json()
                if (res.ok && user) {
                    return user
                }
                return user
            },
        }),
        GitHub({
            allowDangerousEmailAccountLinking: true,
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || "",
            httpOptions: {
                timeout: 100000
            }
        })],
})

export { handler as GET, handler as POST, handler as OPTIONS }