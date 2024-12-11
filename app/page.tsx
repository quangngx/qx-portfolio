"use client";

import {Contact, Footer, Hero, NavBar, Testimonials} from "@/components";
import Projects from "@/components/Home/Projects";
import React from "react";
import {motion} from "motion/react";
import useMousePosition from "@/components/Utilities/mouse/Mouse"; // Ensure the hook is in your utils

export default function Home() {
    const {x, y} = useMousePosition();

    return (
        <main>
            {/* Mouse Following Effect */}
            <motion.div
                className="pointer-events-none z-50"
                style={{
                    position: "fixed",
                    width: `20px`,
                    height: `20px`,
                    borderRadius: "50%",
                    backgroundColor: "black",
                    transform: "translate(-50%, -50%)",
                }}
                animate={{
                    x: x,
                    y: y,
                }}
                transition={{type: "tween", ease: "backOut"}}
            />

            {/* Main Content */}
            <div>
                <NavBar/>
                <Hero/>
                <Projects/>
                <Contact/>
                <Testimonials/>
                <Footer/>
            </div>
        </main>
    );
}
