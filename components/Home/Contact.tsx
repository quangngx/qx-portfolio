"use client";
import Image from "next/image";
import logo from "../../public/quangngx.svg";
import signature from "../../public/signature.svg";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {qphoto4} from "@/public";

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: "all", once: true });

    return (
        <section className="max-w-[95%] mx-auto leading-[1] uppercase py-[3em] md:py-[5em]">
            <div className="flex flex-col xl:flex-row xl:gap-2">
                {/* Left Image Section */}
                <div className="hidden xl:block xl:flex-1">
                    <Image alt="quangngx" src={qphoto4} />
                </div>

                {/* Right Content Section */}
                <div className="xl:flex-1 flex flex-col gap-[1em] sm:gap-10 xl:gap-4]">
                    {/* Animated Text */}
                    <div ref={ref} className="font-anton text-[4em] leading-[.94] tracking-[-.0475em] sm:text-[8em] xl:text-[8.75vw]">
                        {["Let’s Create", "Something", "Amazing"].map((text, index) => (
                            <motion.h2
                                key={index}
                                style={{ rotateX: "90deg" }}
                                transition={{
                                    duration: 0.4,
                                    ease: [0.22, 1, 0.36, 1],
                                    delay: 0.3 + index * 0.3,
                                }}
                                animate={{
                                    rotateX: isInView ? "0" : "90deg",
                                    transformOrigin: "top",
                                    transformStyle: "preserve-3d",
                                }}
                                className={`cc-line-${index + 1}`}
                            >
                                {text}
                            </motion.h2>
                        ))}
                    </div>

                    {/* Text and Call-to-Action Section */}
                    <div className="flex flex-col sm:flex-row gap-[2em] xl:justify-evenly">
                        <div className="flex flex-col gap-[1em] sm:max-w-[45vw] basis-[50%]">
                            <p className="paragraph-1-5em">
                                Let’s take your ideas from concept to reality. I’m ready when you are. Reach out and let’s create.
                            </p>
                            <Link
                                href="/contact"
                                className="w-fit font-switzer rounded-full border-[2.5px] border-[--orange] font-medium text-[1.1em] text-[--orange] tracking-[-.08em] px-[.4em] py-[.2em] md:border-[3px] md:text-[1.33em] xl:border-[3px] xl:font-semibold xl:text-[1.5em]"
                            >
                                Reach out now!
                            </Link>
                        </div>

                        {/* Logo and Signature Section */}
                        <div className="basis-[50%] md:basis-[25%] flex flex-col justify-start  ">
                            <Image className={'max-w-[200px] w-fit'} src={logo} alt="quangngx logo" />
                            <Image className={'max-w-[150px] w-fit '} src={signature} alt="signature" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
