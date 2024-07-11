"use client";

import { RelayEnvironmentProvider } from "react-relay";
import "../styles/globals.css";

import styles from "../styles/layout.module.css";
import { getCurrentEnvironment } from "../relay/environment"
import { SessionProvider } from "next-auth/react"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const environment = getCurrentEnvironment();

    return (
        <html>
            <head>
                <title>Github Issues: Relay</title>
            </head>
            <RelayEnvironmentProvider environment={environment}>
                <SessionProvider>
                    <body className={styles.layout}>{children}</body>
                </SessionProvider>
            </RelayEnvironmentProvider>
        </html>
    );
}