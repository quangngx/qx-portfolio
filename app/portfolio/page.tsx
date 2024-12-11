"use client"
import Navbar from "@/components/Utilities/NavBar";
import Testimonials from "@/components/Carousel/Testimonials";
import {projectsGallery} from "@/constants";
import {Footer} from "@/components";
import {ProjectGalleryItem} from "@/components/Utilities/project";
import {Modal} from "@/components/Utilities/modal";
import React, {useState} from "react";
import {motion} from "motion/react";
import useMousePosition from "@/components/Utilities/mouse/Mouse"; // Ensure the hook is in your utils

export default function ProjectsPage() {
    const [modal, setModal] = useState({active: false, index: 0})
    const {x, y} = useMousePosition()

    return (
        <>
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
            <section className={"max-w-[95%] mx-auto place-content-center pt-[8em] lg:pt-[15vw]"}>
                <div className={"flex flex-col gap-[1vw] xl:max-w-[40%]"}>
                    <p className="md:basis-[47%] lg:basis-[50%] uppercase text-[3em] font-anton tracking-[-0.0475em] leading-[0.94] md:text-[3.5em] lg:text-[6vw] ">
                        Portfolio
                    </p>
                    <p className={"md:basis-[40%] xl:basis-[25%] uppercase font-switzer font-semibold leading-[1] tracking-[-.065em] text-[1.25em] xl:text-[1.66vw]"}>
                        Showcasing My Recent Creative Ventures, Achievements, and Innovative Design Projects Across
                        Multiple
                        Platforms
                    </p>
                </div>
                <div className={"mt-[2rem]"}>
                    {projectsGallery.map((project, index) => (
                        <div key={index}>
                            <ProjectGalleryItem index={index} title={project.title}
                                                setModal={setModal}
                                                key={index}
                                                role={project.role}
                                                href={project.href}
                                                time={project.time}/>
                            <Modal modal={modal} projects={projectsGallery}/>
                        </div>
                    ))}
                </div>
            </section>
            <Testimonials/>
            <Footer/>
        </>
    );
}