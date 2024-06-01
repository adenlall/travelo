"use client"
import HankoProfile from "@/hanko/profile";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";

export default function Page() {
    const auth = useAuth();
    useEffect(() => {
        console.log(auth);
    }, [auth])
    return <>
        <HankoProfile />
    </>
}