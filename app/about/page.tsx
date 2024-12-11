"use client"
import Navbar from "@/components/Utilities/NavBar";
import {Footer, Services, Testimonials} from "@/components";
import {aboutPhotos} from "@/constants";
import Image from "next/image";
import {MyProcess} from "@/components/About/Process";
import {Intro} from "@/components/About/Hero";
import {motion} from "motion/react";
import React from "react";
import useMousePosition from "@/components/Utilities/mouse/Mouse"; // Ensure the hook is in your utils

export default function AboutPage() {
    const {x, y} = useMousePosition();
    return (
        <div>
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
            <Navbar/>
            <section className="max-w-[95%] mx-auto pt-[8em] lg:pt-[15vw] ">
                <div className={"flex flex-col gap-4 md:flex-row justify-between md:items-end pb-[3em] md:pb-[5em]"}>
                    <p className="md:basis-[47%] lg:basis-[50%] uppercase text-[3em] font-anton tracking-[-0.0475em] leading-[0.94] md:text-[3.5em] lg:text-[6vw] ">
                        About my creative journey
                    </p>
                    <p className="md:basis-[40%] xl:basis-[25%] all-caps-paragraph-1-5em">
                        Mixing Sharp Skills and Big Ideas to Create Work That Sticks and Success That Lasts.
                    </p>
                </div>
                <div className={" grid grid-cols-3 gap-1 md:gap-4"}>
                    {aboutPhotos.map((item) => (
                        <Image key={item.id} src={item.src} alt={item.att}/>
                    ))}
                </div>
            </section>
            <Intro/>
            <Services/>
            <MyProcess/>
            <Testimonials/>
            <Footer/>
        </div>
    );
}



