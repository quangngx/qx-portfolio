import type {Metadata} from "next";
import "../styles/globals.css";
import React from "react";

export const metadata: Metadata = {
    title: "@quangngx - Creative Developer",
    keywords: ["quangngx","quang.ngx","freelancer","web freelancer","gsap freelancer"],
    description: "Welcome to my creative space! I’m Quang Nguyễn, a Creative Developer, UI/UX Designer, and Web Developer with 4+ years of experience turning bold ideas into stunning digital experiences. From designing intuitive interfaces to building fast, responsive, and interactive websites, I work across a range of modern technologies to bring your vision to life. Whether it’s Webflow, custom frameworks, or the latest tools, I deliver work that looks amazing, feels seamless, and just works—no limits, no compromises.\n" +
        "\n" +
        "Let’s create something extraordinary together!",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}
