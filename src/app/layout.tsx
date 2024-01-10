import type {Metadata} from 'next'
import {Rubik} from 'next/font/google'
import './globals.css'
import {ReactNode} from "react";
import Link from "next/link";

const font = Rubik({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'CosmosFE',
    description: 'A next-generation frontend for Refresh.',
}

function NavBarItem({href, title}: {href: string, title: string}) {
    return (
        <Link href={href}>{title}</Link>
    )
}

function NavBar() {
    return (
        <nav className="flex gap-x-1">
            <NavBarItem href="/" title="Home"></NavBarItem>
            <NavBarItem href="/asf" title="asf"></NavBarItem>
        </nav>
    );
}

export default function RootLayout({children,}: {
    children: ReactNode
}) {
    return (
        <html lang="en">
        <body className={font.className + " bg-background text-foreground m-0 h-full"}>
        <main>
            <div className="flex">
                <h1 className="font-bold mr-1">CosmosFE Prototype</h1>
                <NavBar></NavBar>
            </div>
            {children}
        </main>
        </body>
        </html>
    )
}
