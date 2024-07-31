"use client"

import { RelayEnvironmentProvider } from "react-relay"
import "../styles/globals.css"

import { getCurrentEnvironment } from "@/relay/environment"
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "next-themes"
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import NavBar from "@/components/Guest/NavBar";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


export default function RootLayout({
                                     children
                                   }: {
  children: React.ReactNode;
}) {
  const environment = getCurrentEnvironment()

  return <html>
  <head>
    <title>Travelos: Your Trip Accompanied</title>
  </head>
  <RelayEnvironmentProvider environment={environment}>
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        {children}
        </body>
      </ThemeProvider>
    </SessionProvider>
  </RelayEnvironmentProvider>
  </html>
}