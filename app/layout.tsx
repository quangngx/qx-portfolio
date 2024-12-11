import type {Metadata} from "next";
import "../styles/globals.css";
import React from "react";

export const metadata: Metadata = {
    title: "@quangngx - Creative Developer",
    keywords: ["quangngx", "quang.ngx", "quang", "quangnnx", "quangngx webflow","quang.ngx webflow", "freelancer", "web freelancer"],
    description: "Quang Nguyễn (@quangngx) - Web Designer - Creative developer.",
    openGraph: {
        title: "@quangngx - Creative Developer",
        description: "Quang Nguyễn (@quangngx) - Web Designer - Creative developer.",
        images: ["ogp.png"],
        
    }
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}
