import type {Metadata} from 'next'
import {Rubik} from 'next/font/google'
import './globals.css'
import {ReactNode} from "react";

const font = Rubik({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'CosmosFE',
    description: 'A next-generation frontend for Refresh.',
}

export default function RootLayout({children,}: {
    children: ReactNode
}) {
    return (
        <html lang="en">
        <body className={font.className}>{children}</body>
        </html>
    )
}
