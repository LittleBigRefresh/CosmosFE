import type {Metadata} from 'next'
import {Rubik} from 'next/font/google'
import './globals.css'
import {ReactNode} from "react";
import Header from "@/components/page/Header";
import FontAwesomeInitializer from "@/components/loading/FontAwesomeInitializer";

const font = Rubik({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'CosmosFE',
    description: 'A next-generation frontend for Refresh.',
}

export default function RootLayout({children}: {children: ReactNode}) {
    return (
        <html lang="en">
        <body className={font.className + " bg-background text-foreground m-0 h-full"}>
        <FontAwesomeInitializer></FontAwesomeInitializer>
        <main>
            <Header></Header>
            <div className="container mx-auto bg-backdrop p-5 border-divider">
                {children}
            </div>
        </main>
        </body>
        </html>
    )
}
