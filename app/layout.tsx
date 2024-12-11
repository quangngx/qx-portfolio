import type {Metadata} from "next";
import "../styles/globals.css";
import React from "react";

export const metadata: Metadata = {
    title: "@quangngx - Creative Developer",
    keywords: ["quangngx", "quang.ngx", "quang", "quangnnx", "quangngx webflow","quang.ngx webflow", "freelancer", "web freelancer"],
    description: "I’m Quang Nguyễn (@quangngx), a designer and creative developer with 4 years of turning big ideas into things that actually look and work great. From designs that catch eyes to interactions that feel just right, I make sure every project stands out — and doesn’t put anyone to sleep.",
    openGraph: {
        title: "@quangngx - Creative Developer",
        description: "I’m Quang Nguyễn (@quangngx), a designer and creative developer with 4 years of turning big ideas into things that actually look and work great. From designs that catch eyes to interactions that feel just right, I make sure every project stands out — and doesn’t put anyone to sleep.",
        images: ["ogp.png"]
    }
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}
