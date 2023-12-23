"use client"
import { barlow } from "@/utils/fonts";
import { signOut } from "next-auth/react";

export default function Home() {

    return (
        <main >
            <h1 className={`${barlow.className}`}>Barlow</h1>
            <button onClick={()=>signOut()}>signOut</button>
        </main>
    );
};